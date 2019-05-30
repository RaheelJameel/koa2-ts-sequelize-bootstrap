import * as userRepo from '../repositories/user';
import { validate } from '../validations/index';
import * as userSchema from '../validations/schemas/user';
import { BasicUser } from '../interfaces/user';
import { UserModel } from '../interfaces/models/user';
import { PaginationState } from '../interfaces/pagination';

export const getAll = async (pagination?: PaginationState): Promise<UserModel[]> => {
  return userRepo.getAll(pagination);
};

export const create = async (payload: BasicUser): Promise<UserModel> => {
  payload = validate(payload, userSchema.create);
  return userRepo.create(payload);
};
