import { Context } from 'koa';
import * as compose from 'koa-compose';
import { Response } from '../interfaces/response';

const handler = async (ctx: Context, next: () => void) => {
  await next();
  const response: Response = {
    meta: {
      status: ctx.status,
      message: ctx.state.message || 'success'
    },
    data: ctx.state.data
  };
  ctx.body = response;
};

export default () => compose([
  handler,
]);
