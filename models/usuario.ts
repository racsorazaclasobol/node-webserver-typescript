import { DataTypes } from 'sequelize';
import database from '../database/connection.js';

const Usuario = database.define('Usuario', {

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    

});

export default Usuario;