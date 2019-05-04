import * as userRepo from '../repositories/user';
import { validate } from '../validations/index';
import * as userSchema from '../validations/schemas/user';
import { BasicUser } from '../interfaces/user';
import { UserModel } from '../interfaces/models/user';

export const getAll = async (): Promise<UserModel[]> => {
  return userRepo.getAll();
};

export const create = async (payload: BasicUser): Promise<UserModel> => {
  payload = validate(payload, userSchema.create);
  return userRepo.create(payload);
};
