let db = require('../dataBase.json')

exports.BuscaPorCategoria = (req, res) => {
    const cate = req.params.categoria

    const result = db.find((livro) => livro.categoria === cate)
    if (!result){
        return res.status(201).send('categoria não existe')
    }

    const filtro = db.filter((livro) => {
        return livro.categoria === cate
    })

    return res.status(201).send(filtro)
}