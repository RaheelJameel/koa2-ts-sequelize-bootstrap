import { Context } from 'koa';
import * as userService from '../services/user';
import { BasicUser } from '../interfaces/user';

export const getAll = async (ctx: Context, next: () => void) => {
  // Todo remove this
  next = next;
  ctx.state.data = await userService.getAll();
};

export const create = async (ctx: Context, next: () => void) => {
  // Todo remove this
  next = next;
  const payload: BasicUser = {
    userId: ctx.request.body.name,
    name: ctx.request.body.password,
  }
  ctx.state.data = await userService.create(payload);
};
