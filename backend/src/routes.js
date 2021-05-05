const express = require('express');
const routes = express.Router();

routes.post('/home', (req, res) => {
    console.log(req);
    res.status(200).send("Oi");
})

module.exports = routes;