import { dataBase } from "../database.js";
import { DataTypes } from "sequelize";
import { Artiste } from "./artiste.model.js";

const Music= dataBase.define('Music', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artisteId: {
        type: DataTypes.INTEGER,
        allowNull: false,   
        references: {
            model: Artiste,
            key: 'id'
        }       
    }


},
{
    tableName: 'musics',
    timestamps: false 
});
Artiste.hasMany(Music, { foreignKey: 'artisteId' });
Music.belongsTo(Artiste, { foreignKey: 'artisteId' });
export {Music};