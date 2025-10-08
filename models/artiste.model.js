
import { dataBase } from "../database.js";
import { DataTypes } from "sequelize";

const Artiste = dataBase.define('Artiste', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,   
        autoIncrement: true,
        allowNull: false
    },
    nom: {      
        type: DataTypes.STRING,
        allowNull: false
    },
    
},
{
    tableName: 'artistes',
    timestamps: false 
});
export {Artiste};