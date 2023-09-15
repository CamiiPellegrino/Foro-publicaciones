
const { DataTypes, sequelize, Sequelize } = require('../database')

const PublicacionSchema = sequelize.define('Publicacion', {
    titulo: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    tableName: 'publicaciones'
} 
)
PublicacionSchema.sync({ force: false })
module.exports = PublicacionSchema;