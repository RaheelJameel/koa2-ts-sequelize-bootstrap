import { Context } from 'koa';
import * as projectService from '../services/project';
import { BasicProject } from '../interfaces/project';

export const getAll = async (ctx: Context, next: () => void) => {
  // Todo remove this
  next = next;
  ctx.state.data = await projectService.getAll();
};

export const create = async (ctx: Context, next: () => void) => {
  // Todo remove this
  next = next;
  const payload: BasicProject = {
    name: ctx.request.body.name,
    ownerId: ctx.request.body.ownerId
  };
  ctx.state.data = await projectService.create(payload);
};
