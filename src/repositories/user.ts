import { Models } from '../models/index';
import { BasicUser } from '../interfaces/user';
import { UserModel } from '../interfaces/models/user';
import { PaginationState } from '../interfaces/pagination';
import { createPaginateOptions } from '../util/pagination';

const userModelStatic = Models.user;

export const getAll = async (pagination?: PaginationState): Promise<UserModel[]> => {
  const paginate = createPaginateOptions(pagination);
  return userModelStatic.findAll({
    include: [{
      model: Models.project,
      as: 'projects',
      required: false
    }],
    ...paginate
  });
};

export const create = async (payload: BasicUser): Promise<UserModel> => {
  return userModelStatic.create(payload);
};
