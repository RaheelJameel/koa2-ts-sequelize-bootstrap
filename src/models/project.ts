import { Sequelize, DataTypes } from 'sequelize';
import { ProjectModelStatic } from '../interfaces/models/project';
import { ModelFactory } from '../interfaces/models/index';

export default function (sequelize: Sequelize) {
  const ProjectModelDefine = sequelize.define('project', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ownerId: {
      type: DataTypes.INTEGER,
      onUpdate: 'set null',
      onDelete: 'set null',
      references: {
        model: 'users',
        key: 'id'
      },
      allowNull: true
    }
  }, { tableName: 'projects' }) as ProjectModelStatic;
  ProjectModelDefine.associate = (models: ModelFactory) => {
    ProjectModelDefine.belongsTo(models.user, {
      foreignKey: 'ownerId',
      targetKey: 'id',
      as: 'owner'
    });
  };
  return ProjectModelDefine;
}
