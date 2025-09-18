const express = require("express");
const router = express.Router();

const clientes = require("../controllers/clientes.controller");

//Define os métodos e rotas de aplicação
router.post("/cliente",clientes.cadastrar);
router.get("/clientes/:cpf",clientes.buscar);

module.exports = router;