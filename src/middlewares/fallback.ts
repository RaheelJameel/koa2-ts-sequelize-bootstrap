import { Context } from 'koa';
import * as compose from 'koa-compose';
import { notFound } from 'boom';

/**
 * This middleware will only be called if no route is matched
 */
const handler = async (ctx: Context) => {
  throw notFound(`Route Not Found ${ctx.request.originalUrl}`);
};

export default () => compose([
  handler,
]);
