
// Importar dependência EXPRESS

const express = require('express');

const path = require('path');

//Iniciando EXPRESS
const server = express()

server
.use(express.static('public'))

// Criando ROTA
server.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, 'views', 'index.html'))
})


// ligar o servidor
server.listen(5500)
