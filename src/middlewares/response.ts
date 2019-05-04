import { Context } from 'koa';
import * as compose from 'koa-compose';
import { AppResponse } from '../interfaces/response';

const handler = async (ctx: Context, next: () => void) => {
  await next();
  const status = ctx.state.status || (ctx.state.data ? 200 : 404);
  const response: AppResponse = {
    meta: {
      status,
      message: ctx.state.message || 'success'
    },
    data: ctx.state.data
  };
  ctx.status = status;
  ctx.body = response;
};

export default () => compose([
  handler,
]);
