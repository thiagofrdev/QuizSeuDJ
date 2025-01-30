const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({
  origin: '*', // Idealmente, coloque o domínio do frontend aqui
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', (req, res) => {
  res.sendStatus(200);
});

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