import { Context } from 'koa';
import * as compose from 'koa-compose';
import { notFound } from 'boom';

const handler = async (ctx: Context, next: () => void) => {
  // Todo remove these
  ctx = ctx;
  next = next;
  throw notFound(`Route Not Found ${ctx.request.originalUrl}`);
};

export default () => compose([
  handler,
]);
