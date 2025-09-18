const clientes = require("../data/clientes.data");


const cadastrar = (req, res) => {
    const data = req.body;
    

    if (data.cpf=== "") {
    res.status(404).send("Cpf Não Encontrado").end();
    }else{
        clientes.push(data);
        res.status(201).send("Cadastrado com Sucesso").end();
    }
 
};

const buscar = (req, res) => {
    const id = req.params.id;

    var client ="";

        clientes.forEach((cliente, index) => {
        if (cliente.id === id) {
            client = cliente;
        }
    });

      if (client === "") client = "não encontrado";

    res.send(client).end();

};

module.exports = {
    cadastrar,
    buscar
   
};
