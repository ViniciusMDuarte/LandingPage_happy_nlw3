
// Importar dependência EXPRESS

const express = require('express');

const path = require('path');

const pages = require('./pages');

//Iniciando EXPRESS
const server = express()

server
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Criando ROTA
.get('/', pages.index)
.get('/page-orphanage', pages.pageOrphanage)
.get('/search-orphanages', pages.searchOrphanages)
.get('/create-orphanage', pages.createOrphanage)


// ligar o servidor
server.listen(5500)
