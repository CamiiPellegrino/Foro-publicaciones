require('dotenv').config();
const express = require('express')
const path = require('path');
const { sequelize, conectarDB } = require('./database');
require('ejs');
const app = express();

//Conexion a BD 
conectarDB()


//middlewares
app.use(express.json()) 
app.set('view engine', 'ejs')
app.use("/static", express.static('./static/')); 
app.use(express.static(__dirname + '/public'));
// (??) para poder vincular js y css a ejs
//rutas 
app.use(require('./routes/users.routes')) 

app.listen(process.env.PORT, () => {console.log('05 escuchando en puerto ' + process.env.PORT)})
