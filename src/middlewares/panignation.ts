import { Context } from 'koa';
import * as compose from 'koa-compose';
import { validate } from '../validations/index';
import * as paginationSchema from '../validations/schemas/pagination';
import { limit, offset, sortBy, SortOrder } from '../constants/pagination';
import { PaginationState } from '../interfaces/pagination';

const handler = async (ctx: Context, next: () => void) => {
  if (ctx.method === 'GET') {
    const pagination: PaginationState = {
      limit: parseInt(ctx.query.limit, 10) || limit,
      offset: parseInt(ctx.query.offset, 10) || offset,
      sortBy: ctx.query.offset || sortBy,
      sortOrder: ctx.query.sortOrder || SortOrder.asc
    };
    validate(pagination, paginationSchema.pagination);
    if (pagination.limit < 0) {
      pagination.limit = limit;
    }
    if (pagination.offset < 0) {
      pagination.offset = offset;
    }
    ctx.state.pagination = pagination;
  }
  await next();
};

export default () => compose([
  handler,
]);
