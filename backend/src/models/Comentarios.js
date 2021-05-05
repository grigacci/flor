const connection = require("../database/connection");

module.exports = {
    async create() {
        const result = await connection("comentarios").insert(comentarios);
        return result;
    },

    async getById({user_id , produto_id}){
        const result = await connection("comentarios").where({user_id , produto_id}).select("*");
        return result;
    },

    async updateById({user_id , produto_id}){
        const result = await connection("comentarios").where({user_id , produto_id}).update(comentarios);
        return result;
    },

    async deleteById({user_id , produto_id}){
        const result = await connection("comentarios").where({user_id , produto_id}).delete();
        return result;
    },

}