// Controla as rotas
const conexao = require("../infraestrutura/conexao");
const Atendimento = require("../models/atendimentos");
module.exports = (app) => {
  //req = o que enviamos
  //res = o que recebemos
  app.get("/atendimentos", (req, res) => {
    Atendimento.lista(res);
  }); // Puxa dados para o navegador

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.buscaPorId(id, res);
  });

  app.post("/atendimentos", (req, res) => {
    const atendimento = req.body;

    Atendimento.adiciona(atendimento, res);
  }); // recebe dados do navegador

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    Atendimento.altera(id, valores, res);
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.deleta(id, res);
  });
};
