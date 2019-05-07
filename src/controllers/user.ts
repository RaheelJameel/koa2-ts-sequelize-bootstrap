import { Context } from 'koa';
import * as userService from '../services/user';
import { BasicUser } from '../interfaces/user';

export const getAll = async (ctx: Context) => {
  ctx.state.data = await userService.getAll();
};

export const create = async (ctx: Context) => {
  const payload: BasicUser = {
    userId: ctx.request.body.userId,
    name: ctx.request.body.name,
  };
  ctx.state.data = await userService.create(payload);
};
