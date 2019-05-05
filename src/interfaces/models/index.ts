import { Model, BuildOptions } from 'sequelize';

import { UserModelStatic } from './user';
import { ProjectModelStatic } from './project';

export interface AssociatableModel {
  associate?(models: ModelFactory): void;
}

export type ModelStatic = typeof Model & AssociatableModel;

export interface ModelFactory {
  user: UserModelStatic;
  project: ProjectModelStatic;
  [index: string]: ModelStatic;
}

export type ModelStaticInstance<T> = ModelStatic &
  (new (values?: object, options?: BuildOptions) => T);
