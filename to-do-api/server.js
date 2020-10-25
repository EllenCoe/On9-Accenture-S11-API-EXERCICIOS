const app = require("./src/app");
const porta = 8000;

app.listen(porta, () => {
  console.log(`Servidor rodando na porta: ${porta}`);
});
