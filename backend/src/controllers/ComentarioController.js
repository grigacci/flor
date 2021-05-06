const { create, getById, updateById } = require("../models/Comentario");
const ComentModel = require("../models/Comentario");

module.exports = {
    async create(request , response) {
        try {
           const novoComent = request.body;
           const result = await ComentModel.create(novoComent);
    
           return response.status(201).json(result);
           
        } catch (error) {
           console.warn("Erro na criação do comentario: ", error);
           return response.status(500).json({notification : "Erro interno"});
        }
    },

    async getByIds(request , response) {
        try {
            const  info  = request.body;
            const result = await ComentModel.getById(id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("Comentario getById failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to get Coment",
            });
        }
    },

    async update(request , response) {
        try {
            const comentario_id  = request.params;
            const  info  = request.body;

            const result = await ComentModel.updateById(comentario_id,info);
     
            return response.status(202).json(result);
        } catch (err) {
            console.log("Comentario update failed:",err);

            return response.status(500).json({
                notification: "Internal server error while trying to update Comentario",
            });
        }
    },

    async deleteById(request , response) {
        try {
            const  id  = request.body;
            const result = await ComentModel.deleteById(id);
     
            return response.status(202).json(result);
            
         } catch (error) {
            console.warn("Erro na deletagem do comentario: ", error);
            return response.status(500).json({notification : "Erro interno"});
         }
    }

}