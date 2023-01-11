let express = require('express')
let app = express()
let routes = require('./routes/routes')
const fs = require('fs')

app.use(routes)


app.listen(3000, () => {
    console.log('a api está rodando na porta 3000')
})

