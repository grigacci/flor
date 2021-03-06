require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookie = require('cookie');

const routes = require("./routes");
const { errors } = require('celebrate');

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.listen(port, () => {
    console.log('Servidor escutando na porta: ' + port);
})