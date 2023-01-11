let db = require('../dataBase.json')

exports.BuscaPorStatus = (req, res) => {
    const status = req.params.status

    const result = db.find((livro) => livro.status === status)
    if (!result){
        return res.status(201).send('Não há livros com esse status')
    }

    const filtro = db.filter((livro) => {
       return  livro.status === status
    })

    return res.status(201).send(filtro)


}