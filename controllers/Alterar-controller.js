let db = require('../dataBase.json')
const fs = require('fs')

exports.alterar = (req, res) => {
    const titulo = req.params.titulo
    const body = req.body

    const result = db.find((livro) => livro.titulo === titulo)
    if (!result){
        return res.status(404).send('livro não esta cadatrado')
    }

    const data = db.map((livro) => {
        if (livro.titulo === titulo){
            const dados = {
                titulo : titulo,
                ...body

            }

            return dados
        }

        return livro
    })

    fs.writeFileSync('dataBase.json', JSON.stringify(data))
    
        return res.status(201).send(body)

}