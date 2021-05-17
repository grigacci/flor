const Firebase = require("../utils/Firebase");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const storage = require('node-sessionstorage')

module.exports = {
    async signIn(request, response){
        try {
            let {email , password} = request.body;

            let uid;
            try {
                uid = await Firebase.login(email, password);
                
            } catch (error) {
                console.warn(error)
                return response.status(403).json({ message: "Credenciais inválidas" })
            }
        
            const user = await User.getByFields({"email" : email});
            const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn : "300d",});
            const nome = user.name;
            storage.setItem('nome', nome);
            storage.setItem('user_id', user.user_id);
            storage.setItem('email', user.email);
            storage.setItem('endereco', user.endereco);
            storage.setItem('cidade', user.cidade);
            storage.setItem('estado', user.estado);
            storage.setItem('cep', user.cep);
            storage.setItem('flor', user.flor);
            storage.setItem('cartao', user.cartao);
            storage.setItem('mes', user.mes);
            storage.setItem('ano', user.ano);
            storage.setItem('cvc', user.cvc);
            return response.status(200).json({nome, accessToken});

        } catch (error) {
            console.warn(error);
            return response
            .status(500)
            .json({ message : "Erro na validação das credenciais"})
        }
    },
    async barra(request, response){   
            const nome = storage.getItem('nome');
            return response.status(200).json(nome);
    },

};