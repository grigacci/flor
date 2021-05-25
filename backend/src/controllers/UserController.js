const User = require("../models/User");
const { create, getById, updateById } = require("../models/User");
const Firebase = require("../utils/Firebase");


module.exports = {
    async create(request, response) {
        try {
            const user = request.body;

            const uid = await Firebase.createNewUser(user.email, user.password);
            delete user.password;
            user.firebase_id = uid;

            
            const result = await User.create(user);
            return response.status(200).json(result);

        } catch (err) {
            console.warn("User creation failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to create User",
            });
        }
    },
    async getById(request, response) {
        try {
            const { user_id } = request.params;
            const result = await User.getById(user_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("User getById failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to get User",
            });
        }
    },
    async update(request, response) {
        try {
            const { user_id } = request.params;
            const user = request.body;
            const result = await User.updateById(user_id, user);

            return response.status(200).json(result);
        } catch (err) {
            console.log("User update failed:",err);

            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    },
    async delete(request, response) {
        try {
            const { user_id } = request.params;

            const result = await User.deleteById(user_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("User delete failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to delete User",
            });
        }
    },

    async getByName(request , response) {
        try {
            const nome = request.params;
            if (nome === undefined){
                return response.status(201).json({notification: "Faltou o nome"});
            }
            const result = await User.getByFields(nome);
            return response.status(200).json(result);
        } catch (error) {
            console.log("Opa", error);

            return response.status(500).json({
            notification: "Internal server error while trying to delete User"
        })
        }

    },
    async sendPasswordResetEmail(request, response) {
        try {
            const {email} = request.body;
            if (!email) return response.status(401).json({notification: "Request missing user email"})
            const result = await Firebase.sendPasswordResetEmail(email)
            return response.status(200).json(result);

        } catch (err) {
            console.warn("Send password failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to reset password ",
            });
        }
    },


    
};