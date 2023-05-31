const express = require('express');
const httpProxy = require('express-http-proxy');
const apiRoutes = require('./urls');

const app = express();

const port = process.env.PORT || 3005;

const apiTeste1ServiceProxy = httpProxy(apiRoutes.API_TESTE_1);
const apiTeste2ServiceProxy = httpProxy(apiRoutes.API_TESTE_2);

app.get('/', (req, res) => res.send('Hello Api Gateway!'));
app.get('/apiteste1', (req, res, next) => apiTeste1ServiceProxy(req, res, next));
app.get('/apiteste2', (req, res, next) => apiTeste2ServiceProxy(req, res, next));

app.listen(port, function() {
    console.log('Exemplo');
})
