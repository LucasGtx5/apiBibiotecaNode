let db = require('../dataBase.json')

exports.BuscaPorAutor = (req, res) => {
    const autor = req.params.autor

    const result = db.find((livro) => livro.autor === autor)
    if (!result){
        return res.status(404).send('autor não existe')
    }

    const data = db.filter((livro) => {
      return  livro.autor === autor
    })

    res.status(201).send(data)
}