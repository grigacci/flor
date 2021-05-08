const Firebase = require("../utils/Firebase");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
    async signIn(request, response){
        try {
            const {email , password} = request.body;

            let uid;
            try {
                uid = await Firebase.login(email, password);
                
            } catch (error) {
                console.warn(error)
                return response.status(403).json({ message: "Credenciais inválidas" })
            }
            
            const user = await User.getByFields({firebase_id : uid});
            const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : "300d",});
            return response.status(200).json({user, accessToken});

        } catch (error) {
            console.warn(error);
            return response
            .status(500)
            .json({ message : "Erro na validação das credenciais"})
        }
    },

};