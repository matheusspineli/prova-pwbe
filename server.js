const express = require("express");
const cors = require("cors");

const clientescontroller = require("./src/routes/clientes.routes");
const pedidoscontroller = require("./src/routes/pedidos.routes");
const produtoscontroller = require("./src/routes/produtos.routes");

const app = express(); //Carrega congig. inicial do express

app.use(cors()); //Aplica o cors
app.use(express.json()); //Habilita a comunicação com JSON

app.use(clientescontroller); //Inclui as rotas ao express
app.use(pedidoscontroller);
app.use(produtoscontroller);



//Inicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});