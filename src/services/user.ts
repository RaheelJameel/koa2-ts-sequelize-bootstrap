import * as userRepo from '../repositories/user';
import { validate } from '../validations/index';
import * as userSchema from '../validations/schemas/user';
import { BasicUser, User } from '../interfaces/user';

export const getAll = async (): Promise<User> => {
  return userRepo.getAll();
};

export const create = async (payload: BasicUser) => {
  payload = validate(payload, userSchema.create);
  return userRepo.create(payload);
}
