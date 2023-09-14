//Conexion a la db
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASS_DB, {
    
    host: process.env.HOST,
    dialect: process.env.DIALECT
})

const conectarDB = async () => {
try {
    await sequelize.authenticate();
    console.log('conexion a DB exitosa');
}catch(err) {
    console.log(err)
}

}

module.exports = {
    conectarDB,
    sequelize, 
    Sequelize,
    DataTypes
}