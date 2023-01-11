let db = require('../dataBase.json')
const fs = require('fs')

exports.deleta = (req, res) => {
    const titulo = req.params.titulo

    const result = db.find((livro) => livro.titulo === titulo) 
    if (!result){
        return res.status(404).send('livro inexistente')

    }
    
    const data = db.filter((livro) => {
        return livro.titulo !== titulo
    })

    fs.writeFileSync('dataBase.json', JSON.stringify(data))
    return res.status(201).send(db)

}