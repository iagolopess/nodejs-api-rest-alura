// Controla as rotas

module.exports = (app) => {
  //req = o que enviamos
  //res = o que recebemos
  app.get("/atendimentos", (req, res) =>
    res.send("Você está na rota de atendimentos e está realizando um GET")
  ); // Puxa dados para o navegador

  app.post("/atendimentos", (req, res) => {
    console.log(req.body);
    res.send("Você está na rota de atendimentos e está realizando um POST");
  }); // recebe dados do navegador
};
