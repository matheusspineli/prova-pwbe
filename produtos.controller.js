const produtos = require("../data/produtos.data");

const cadastrar = (req, res) => {
    const data = req.body;
    produtos.push(data);
    res.status(201).send("Cadastrado com sucesso").end();
};


const buscar = (req, res) => {
    const id = req.params.id;

    var product ="";

        produtos.forEach((produto, index) => {
        if (produto.id === id) {
            product = produto;
        }
    });

      if (product === "") product = "não encontrado";

    res.send(product).end();

};


const apagar = (req, res) => {
    const id = req.params.id;

    var indice = -1;

    produtos.forEach((produto, index) => {
        if (produto.id === id) {
            indice = index;
        }

    });

    if (indice === -1) {
        res.status(404).end();
    } else {
        produtos.splice(indice, 1);
        res.send(200).end();
    }
};

const atualizar = (req, res) => {
    const product = req.body;

    var encontrei = false;

    produtos.forEach((produto, index) => {
        if (produto.id === product.id) {
            produtos[index] = product;
            encontrei = true;
        }
    });

    if (encontrei === false) {
        res.status(404).end();
    } else {
        res.status(201).end();
    }

};


module.exports = {
    cadastrar,
    buscar,
    apagar,
    atualizar
};
