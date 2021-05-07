const express = require('express');
const routes = express.Router();

const ProdutoController = require("./controllers/ProdutoController");
const UserController = require("./controllers/UserController");
const ComentarioController = require("./controllers/ComentarioController");

const UserValidator = require("./validators/UserValidator");
const ComentValidator = require("./validators/ComentValidators");

//Produto
routes.get("/produto/:produto_id", ProdutoController.getById);
routes.post("/produto",ProdutoController.create);
routes.put("/produto/:produto_id", ProdutoController.updateById);
routes.delete("/produto/:produto_id",ProdutoController.deleteById);

//User
routes.post("/users",UserValidator.create, UserController.create);
routes.get("/users/:user_id",UserValidator.getById, UserController.getById);
routes.put("/users/:user_id",UserValidator.updateById, UserController.update);
routes.delete("/users/:user_id",UserValidator.deleteById, UserController.delete);

//Comentarios
routes.post("/comentario",ComentValidator.create, ComentarioController.create);
routes.get("/comentario",ComentValidator.getByIds, ComentarioController.getByIds);
routes.get("/comentario/:comentario_id",ComentValidator.getById, ComentarioController.getById);
routes.put("/comentario/:comentario_id",ComentValidator.updateById, ComentarioController.update);
routes.delete("/comentario/:comentario_id",ComentValidator.deleteById, ComentarioController.deleteById);


module.exports = routes;