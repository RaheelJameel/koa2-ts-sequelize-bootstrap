import { Sequelize, DataTypes } from "sequelize";
import { UserModelStatic } from "../interfaces/models/user";
import { ModelFactory } from "../interfaces/models/index";

export default function (sequelize: Sequelize) {
  const UserModelDefine = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }) as UserModelStatic;
  UserModelDefine.associate = (models: ModelFactory) => {
    models = models;
    // UserModelDefine.hasMany(models.merchant, { foreignKey: 'gatewayId' });
  };
  return UserModelDefine;
}
