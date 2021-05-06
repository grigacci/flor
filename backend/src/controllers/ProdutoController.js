const { create, getById, updateById } = require("../models/Produto");
const ProdutoModel = require("../models/Produto");

module.exports = {
    async create(request , response) {
        try {
           const novoProduto = request.body;
           const result = await ProdutoModel.create(novoProduto);
            


           return response.status(200).json(result);
           
        } catch (error) {
           console.warn("Erro na criação do produto: ", error);
           return response.status(500).json({notification : "Erro interno"});
        }
    },

    async getById(request , response) {
        try {
            
        } catch (error) {
            
        }
    },

    async updateById(request , response) {
        try {
            
        } catch (error) {
            
        }
    },

    async deleteById(request , response) {
        try {
            
        } catch (error) {
            
        }
    }

}