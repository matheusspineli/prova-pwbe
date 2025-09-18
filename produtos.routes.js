const express = require("express");
const router = express.Router();

const produtos = require("../controllers/produtos.controller");

//Define os métodos e rotas de aplicação
router.get("/produtos/:id",produtos.buscar);
router.put("/produto/:id",produtos.atualizar);
router.delete("/produtos/:id",produtos.apagar);


module.exports = router;