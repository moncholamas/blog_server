import _posts from './posts.js';
import _categories from './categories.js';
import _sequelize from 'sequelize';
const DataTypes = _sequelize.DataTypes;


//exportamos una funcion que recibe la instancia de conexion actual de sequelize
export default function initModels(sequelize){
    //instancia los modelos
    let posts = _posts.init(sequelize,DataTypes);
    let categories = _categories.init(sequelize,DataTypes);
    
    //crea la asociacion entre posts y categorias
    posts.belongsTo(categories,{as:'category',foreignKey:'id_category'});


    //retorna los modelos instanciados
    return {
        posts,
        categories
    }
}