import _sequelize from 'sequelize';
const { Model } = _sequelize;

export default class posts extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_post: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: "el título es un campo requerido"
        }
      }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty:{
            args: true,
            msg: "el contenido es un campo requerido"
          }
        }
      },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
          isUrl:{
              args:true,
              msg: "ingrese un formato de url conocido"
          }
      }
    },
    id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty:{
                args:true,
                msg: 'ingrese una categoria'
            }
        },
        references: {
          model: 'categories',
          key: 'id_category'
        }
      },
  }, {
    freezeTableName:true,
    sequelize,
    tableName: 'posts',
    updatedAt: false,
    createdAt: true,
    indexes: [
      {
        name: "posts_pkey",
        unique: true,
        fields: [
          { name: "id_post" },
        ]
      },
    ]
  });
  return posts;
  }
}
