import { PaginationState, PaginateOptions } from '../interfaces/pagination';

export const createPaginateOptions = (pagination?: PaginationState): PaginateOptions => {
  const paginate: PaginateOptions = {};
  if (pagination) {
    paginate.order = [[pagination.sortBy, pagination.sortOrder]];
    paginate.limit = pagination.limit;
    paginate.offset = pagination.offset;
  }
  return paginate;
};
