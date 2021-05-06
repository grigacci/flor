const express = require('express');
const routes = express.Router();

const ProdutoController = require("./controllers/ProdutoController");
const UserController = require ("./controllers/UserController");

//Produto
routes.get("/produto/:produto_id", ProdutoController.getById);
routes.post("/produto", ProdutoController.create);
routes.put("/produto/:produto_id", ProdutoController.updateById);
routes.delete("/produto/:produto_id", ProdutoController.deleteById);

//User
routes.post("/users", UserController.create);
routes.get("/users/:user_id", UserController.getById);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete);

module.exports = routes;