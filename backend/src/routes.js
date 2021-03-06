const express = require('express');
const routes = express.Router();

const auth = require("./middlewares/authentication");

const ProdutoController = require("./controllers/ProdutoController");
const UserController = require("./controllers/UserController");
const ComentarioController = require("./controllers/ComentarioController");

const UserValidator = require("./validators/UserValidator");
const ComentValidator = require("./validators/ComentValidators");

const SessionController = require("./controllers/SessionController");

//Sessão
routes.post("/sendPasswordResetEmail", SessionController.sendPasswordResetEmail);
routes.post("/login", SessionController.signIn);
routes.get("/barra", SessionController.barra)

//Produto
routes.get("/produto/:produto_id", ProdutoController.getById);
routes.get("/produto", ProdutoController.getAll);
routes.post("/produto",ProdutoController.create);
routes.put("/produto/:produto_id", ProdutoController.updateById);
routes.delete("/produto/:produto_id",ProdutoController.deleteById);

//User

routes.post("/sendPasswordResetEmail", UserController.sendPasswordResetEmail);
routes.post("/users",UserValidator.create, UserController.create);
routes.post("/cadastro",UserValidator.create, UserController.create);
routes.get("/users/:user_id",UserValidator.getById,auth.authenticateToken, UserController.getById);
routes.get("/user/:name",UserValidator.getByName,auth.authenticateToken,UserController.getByName);
routes.put("/users/:user_id",UserValidator.updateById,auth.authenticateToken, UserController.update);
routes.delete("/users/:user_id",UserValidator.deleteById,auth.authenticateToken, UserController.delete);

//Comentarios
routes.post("/comentario",ComentValidator.create,auth.authenticateToken, ComentarioController.create);
routes.get("/comentario",ComentValidator.getByIds,ComentarioController.getByIds);
routes.get("/comentario/:comentario_id",ComentValidator.getById,ComentarioController.getById);
routes.put("/comentario/:comentario_id",ComentValidator.updateById,auth.authenticateToken, ComentarioController.update);
routes.delete("/comentario/:comentario_id",ComentValidator.deleteById,auth.authenticateToken, ComentarioController.deleteById);



module.exports = routes;