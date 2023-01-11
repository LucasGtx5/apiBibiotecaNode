let db = require('../dataBase.json')
const fs = require('fs')

exports.cadastro = (req, res) => {
    const body = req.body
    const data = [...db, body]

    if (!body){
        return res.status(404).send('Aquivo vazio')
    }

    fs.writeFileSync('dataBase.json', JSON.stringify(data))

    return res.status(201).send(db)


}