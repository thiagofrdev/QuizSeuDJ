const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importando as rotas
const questionsRouter = require('./api/questions');
const resultsRouter = require('./api/results');

// Usando as rotas
app.use('/api', questionsRouter);
app.use('/api', resultsRouter);

app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});