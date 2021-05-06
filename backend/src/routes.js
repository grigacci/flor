const express = require('express');
const routes = express.Router();

const ProdutoController = require("./controllers/ProdutoController");

//Produto
routes.get("/produto/:produto_id", ProdutoController.getById);
routes.post("/produto", ProdutoController.create);
routes.put("/produto/:produto_id", ProdutoController.updateById);
routes.delete("/produto/:produto_id", ProdutoController.deleteById);

module.exports = routes;