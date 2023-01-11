let express = require('express')
let app = express()
let db = require('./dataBase.json')
let routes = express.Router()
const fs = require('fs')
const { json } = require('express')
const { Console } = require('console')


routes.use(express.json())


    
const livro = 'do mil ao milhao'

const result = db.find((categoria) => categoria.titulo === livro)

console.log(result)
    

    

    