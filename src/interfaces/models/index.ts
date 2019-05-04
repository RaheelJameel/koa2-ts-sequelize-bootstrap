import { Model } from 'sequelize';
import { UserModelStatic } from './user';
import { BuildOptions } from 'sequelize';

export interface AssociatableModel {
  associate?(models: ModelFactory): void;
}

export type ModelStatic = typeof Model & AssociatableModel;

export interface ModelFactory {
  user: UserModelStatic;
  [index: string]: ModelStatic;
}

export type ModelStaticInstance<T> = ModelStatic &
  (new (values?: object, options?: BuildOptions) => T);
