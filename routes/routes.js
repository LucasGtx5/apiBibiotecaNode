let express = require('express')
let app = express()
let db = require('../dataBase.json')
let routes = express.Router()
const fs = require('fs')

const CadastroController = require('../controllers/Cadastro-controller')
const DeletaController = require('../controllers/Deleta-controller')
const AlterarController = require('../controllers/Alterar-controller')
const BuscaPorStatusController = require('../controllers/BuscaPStatus-constroller')
const BuscaPorAutorController = require('../controllers/buscaPAutor-controller')
const BuscaPorCategoriaController = require('../controllers/BuscaPCategoria-controller')
const BuscaPorTituloController    =   require('../controllers/BuscaPTitulo-controller')


routes.use(express.json())

module.exports = routes

routes.get('/TodasCategorias', (req, res) => {
    res.json(db)
})

//Cadatra Livros
routes.post('/Cadastralivros', CadastroController.cadastro )

//Deleta Livro
routes.delete('/Deletarlivro/:titulo', DeletaController.deleta )

//Busca livro pelo titulo
routes.get('/livro/:titulo', BuscaPorTituloController.buscaPorTitulo)

//Busca livro por status
routes.get('/status/:status', BuscaPorStatusController.BuscaPorStatus)

//Busca livro por categoria
routes.get('/categoria/:categoria', BuscaPorCategoriaController.BuscaPorCategoria)

//Altera info livro
routes.put('/alterar/:titulo', AlterarController.alterar)

//Busca por autor
routes.get('/autor/:autor', BuscaPorAutorController.BuscaPorAutor)