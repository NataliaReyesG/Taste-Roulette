const express = require('express');
const cors = require('cors');
const morgan = require("morgan");


const app = express()

const db = require('./database');
const bodyParser = require("body-parser")

const port = (process.env.PORT || 5000)

//Midlewares
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors())
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}))

//routes
app.use('/check', require('./routes/registroCli.routes'))
//app.registroRes('/check', require('./routes/registroRes.routes'))
app.use('/RegistroCli', require('./routes/registroCli.routes'))
app.use('/RegistroRes', require('./routes/RegistroRes.routes'))
app.use('/restaurante', require('./routes/restaurante.routes'))
app.use('/menu', require('./routes/menu.routes'))

app.listen(port, () => console.log("App conectada correctamente en el puerto"))

module.exports = app;
