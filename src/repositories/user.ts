import { Models } from '../models/index';
import { BasicUser } from '../interfaces/user';
import { UserModel } from '../interfaces/models/user';

const userModelStatic = Models.user;

export const getAll = async (): Promise<UserModel[]> => {
  return userModelStatic.findAll();
};

export const create = async (payload: BasicUser): Promise<UserModel> => {
  return userModelStatic.create(payload);
};
