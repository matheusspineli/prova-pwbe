const express = require("express");
const router = express.Router();

const pedidos = require("../controllers/pedidos.controller");

//Define os métodos e rotas de aplicação
router.get("/pedidos",pedidos.listar);
router.get("/pedidos/:id",pedidos.buscar);
router.patch("/pedidos/:id",pedidos.alterar);



module.exports = router;