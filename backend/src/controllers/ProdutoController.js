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
            const produto_id  = request.params;
            const result = await ProdutoModel.getById(produto_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto getById failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to get Produto",
            });
        }
    },

    async getAll(request , response) {
        try {
            
            const result = await ProdutoModel.getAll();

            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto getById failed:", err);

            return response.status(500).json({
                notification: "Internal server error while trying to get Produto",
            });
        }
    },

    async updateById(request , response) {
        try {
            const produto_id = request.params;
            const produto = request.body;
            const result = await ProdutoModel.updateById(produto_id, produto);
            return response.status(200).json(result);
        } catch (err) {
            console.log("Produto update failed:",err);
            console.warn("Produto update failed:",err);
            return response.status(500).json({
                notification: "Internal server error while trying to update Produto",
            });
        }
    },

    async deleteById(request , response) {
        try {
            const { produto_id } = request.params;
            const result = await ProdutoModel.deleteById(produto_id);
     
            return response.status(200).json(result);
            
         } catch (error) {
            console.warn("Erro na criação do produto: ", error);
            return response.status(500).json({notification : "Erro interno"});
         }
    }

}