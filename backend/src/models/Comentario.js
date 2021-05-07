const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(comentario) {
        const comentario_id = uuidv4();
        comentario.comentario_id = comentario_id;
        const result = await connection("comentario").insert(comentario);
        return result;
    },

    async getById(comentario_id){
        const result = await connection("comentario").where(comentario_id).select("*");
        return result;
    },


    async getByIds({user_id , produto_id}){
        const result = await connection("comentario").where({user_id , produto_id}).select("*");
        return result;
    },

    async updateById(comentario_id, comentario){
        const result = await connection("comentario").where(comentario_id).update(comentario);
        return result;
    },

    async deleteById(comentario_id){
        const result = await connection("comentario").where(comentario_id).delete();
        return result;
    },

}