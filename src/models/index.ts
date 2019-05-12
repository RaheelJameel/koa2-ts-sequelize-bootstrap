import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, Dialect } from 'sequelize';
const basename = path.basename(__filename);
import * as cls from 'continuation-local-storage';
import { ModelFactory, AssociatableModel } from '../interfaces/models/index';
import { logger } from '../services/logger';

Sequelize.useCLS(cls.createNamespace('transactions-cls'));

const sequelize: Sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || '',
  process.env.MYSQL_USER || '',
  process.env.MYSQL_PASSWORD || '',
  {
    host: process.env.MYSQL_HOST || '',
    port: Number(process.env.MYSQL_PORT) || 0,
    timezone: process.env.MYSQL_TIMEZONE || '',
    dialect: (process.env.MYSQL_DIALECT || '') as Dialect,
    logging(sql: string, data: any) {
      logger.debug({ sequelize: data }, sql.replace(/\r?\n|\r/g, '').replace(/\s{2,}/g, ' '));
    }
  }
);

const models: ModelFactory = {} as any;
fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file !== 'interfaces') && (file.slice(-3) === '.ts');
  })
  .forEach((file: string) => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

// Execute the associations where defined
Object.keys(models)
  .map((modelName) => {
    const model: AssociatableModel = models[modelName];
    if (model.associate) {
      model.associate(models);
    }
  });

export const Database: Sequelize = sequelize;
export const Models: ModelFactory = models;
