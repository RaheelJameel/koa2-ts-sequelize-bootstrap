import { Models } from "../models/index";
import { User, BasicUser } from "../interfaces/user";

const UserModel = Models.user;

export const getAll = async (): Promise<User> => {
  console.log('\n\n\n\nModels:\n', Models);
  return UserModel.findAll();
};

export const create = async (payload: BasicUser): Promise<User> => {
  return UserModel.create(payload);
}
