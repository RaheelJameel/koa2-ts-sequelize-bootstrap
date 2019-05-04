import { Model } from 'sequelize';
import { ModelStaticInstance } from './index';
import { User } from '../user';

export interface UserModel extends Model, User { }

export type UserModelStatic = ModelStaticInstance<UserModel>;
