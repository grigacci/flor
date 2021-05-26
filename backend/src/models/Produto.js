const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async create(produto) {
        const produto_id = uuidv4();
        produto.produto_id = produto_id;
        await connection("produto").insert(produto);
        return produto_id;
    },

    async getAll(){
        const result = await connection("produto").select("*").orderBy("categoria","asc");
        return result;
    },

    async getById({produto_id}){
        const result = await connection("produto").where({produto_id}).select("*");
        return result;
    },

    async updateById(produto_id, produto){
        const result =  await connection("produto").where(produto_id).update(produto);
        return result;
    },

    async deleteById(produto_id){
        const result =  await connection("produto").where({ produto_id }).delete();
        return result;
    },

}