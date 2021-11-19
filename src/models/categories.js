import _sequelize from 'sequelize';
const { Model } = _sequelize;

export default class categories extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_category: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty:{
          args: true,
          msg: "la categoría es un campo requerido"
        }
      }
    }
  }, {
    freezeTableName:true,
    sequelize,
    tableName: 'categories',
    timestamps: false,
    indexes: [
      {
        name: "categories_pkey",
        unique: true,
        fields: [
          { name: "id_category" },
        ]
      },
    ]
  });
  return categories;
  }
}
