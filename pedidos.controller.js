const pedidos = require("../data/pedidos.data");
const listar = (req, res) => {
    res.send(pedidos).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    pedidos.push(data);
    res.status(201).send("Cadastrado com sucesso").end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var order ="";

        pedidos.forEach((pedido, index) => {
        if (pedido.id === id) {
            order = pedido;
        }
    });

      if (order === "") order = "não encontrado";

    res.send(order).end();

};



const alterar = (req, res) => {
    const id = req.params.id;
    const orderUpdate = req.body;

    var indice = -1;

    pedidos.forEach((pedido, index) => {
        if (pedido.id === id) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        Object.keys(orderUpdateUpdate).forEach((chave) => {
            pedidos[indice][chave] = orderUpdateUpdate[chave];
        });

        res.status(200).end();
    }

};

module.exports = {
    cadastrar,
    listar,
    buscar,
    alterar
};
