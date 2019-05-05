import { Model } from 'sequelize';
import { ModelStaticInstance } from './index';
import { Project } from '../project';

export interface ProjectModel extends Model, Project { }

export type ProjectModelStatic = ModelStaticInstance<ProjectModel>;
