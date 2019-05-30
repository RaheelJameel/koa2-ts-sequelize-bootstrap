import { Context } from 'koa';
import * as projectService from '../services/project';
import { BasicProject } from '../interfaces/project';

export const getAll = async (ctx: Context) => {
  ctx.state.data = await projectService.getAll(ctx.state.pagination);
};

export const create = async (ctx: Context) => {
  const payload: BasicProject = {
    name: ctx.request.body.name,
    ownerId: ctx.request.body.ownerId
  };
  ctx.state.data = await projectService.create(payload);
};
