import { Context } from 'koa';
import * as compose from 'koa-compose';
import { AppResponse, MetaData } from '../interfaces/response';

const handler = async (ctx: Context, next: () => void) => {
  await next();
  const status = ctx.state.status || (ctx.state.data ? 200 : 404);

  const meta: MetaData = {
    status,
    message: ctx.state.message || 'success'
  };

  const paginationState = ctx.state.pagination;
  if (paginationState) {
    meta.limit = paginationState.limit;
    meta.offset = paginationState.offset;
    if (paginationState.totalCount) {
      meta.totalCount = paginationState.totalCount;
    }
  }

  const response: AppResponse = {
    meta,
    data: ctx.state.data
  };
  ctx.status = status;
  ctx.body = response;
};

export default () => compose([
  handler,
]);
