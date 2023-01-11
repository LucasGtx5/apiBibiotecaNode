let db = require('../dataBase.json')

exports.buscaPorTitulo = (req, res) => {
    const titulo = req.params.titulo

    const result = db.find((livro) => livro.titulo === titulo)
    if (!result){
        return res.status(404).send('Livro inexistente')
    }

    const data = db.filter((livro) => {
        return livro.titulo === titulo
    })

    return res.status(201).send(data)


}