// Controla as rotas
const Atendimento = require("../models/atendimentos");
module.exports = (app) => {
  //req = o que enviamos
  //res = o que recebemos
  app.get("/atendimentos", (req, res) =>
    res.send("Você está na rota de atendimentos e está realizando um GET")
  ); // Puxa dados para o navegador

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento, res);
  }); // recebe dados do navegador
};
