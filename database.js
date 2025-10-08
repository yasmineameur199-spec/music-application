import { Sequelize} from "sequelize";


const dataBase = new Sequelize('mediatheque', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 , 
});

export {dataBase};