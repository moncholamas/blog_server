import _posts from './posts';
import _sequelize from 'sequelize';
const DataTypes = _sequelize.DataTypes;


//exportamos una funcion que recibe la instancia de conexion de sequelize
export default function initModels(sequelize){
    const posts = _posts.init(sequelize,DataTypes);


    return {
        posts
    }
}