const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

// Criando um objeto express 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TYPE POST
app.post('/clientes/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    return connect.execSQLQuery("insert into cliente (nome) value('" +
        req.body.nome + "')"
        , res);
})

// TYPE PUT
app.put('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT');
    return connect.execSQLQuery("update cliente set nome='" +
        req.body.nome + "' where id=" +
        req.params.id, res);
})

// TYPE DELETE
app.delete('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE');
    return connect.execSQLQuery("delete from cliente where id=" +
        req.params.id, res);
})

// Manipulando o GET request 
app.get('/', (req, res) => {
    res.send('API rodando na porta 5555 <br><br>'
        + 'Acesse as paginas: <br><br> ' +
        '/pagina%20Em%20Branco <br>' +
        '/clientes com /ID ou sem ele')
    res.end()
})

// TYPE GET
app.get('/pagina%20Em%20Branco', (req, res) => {
    res.send('PAGINA EM BRANCO')
    res.end()
})

// TYPE GET
app.get('/clientes', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery('select * from cliente', res);
})

// TYPE GET
app.get('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    return connect.execSQLQuery('select * from cliente where id=' +
        req.params.id, res);
})

// Numero da porta
const PORT = process.env.PORT || 5555;

// Servidor Setup
app.listen(PORT, console.log(`Servidor começou na porta ${PORT}`)); 
