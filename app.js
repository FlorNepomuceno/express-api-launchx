// Usando objeto express
const express = require('express')
const { append } = require('express/lib/response')
//App de express
const app = express()
app.use(express.json()) // Indicamos que usaremos Json 
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000
// rotes
//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
