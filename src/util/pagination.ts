import { PaginationState, PaginateOptions, PaginationInput } from '../interfaces/pagination';
import { limit, offset, sortBy, SortOrder } from '../constants/pagination';

export const createPaginationState = (paginationInput: PaginationInput): PaginationState => {
  const pagination: PaginationState = {
    limit: paginationInput.limit || limit,
    offset: paginationInput.offset || offset,
    sortBy: paginationInput.sortBy || sortBy,
    sortOrder: paginationInput.sortOrder || SortOrder.asc
  };
  return pagination;
};

export const createPaginateOptions = (pagination?: PaginationState): PaginateOptions => {
  const paginate: PaginateOptions = {};
  if (pagination) {
    paginate.order = [[pagination.sortBy, pagination.sortOrder]];
    paginate.limit = pagination.limit;
    paginate.offset = pagination.offset;
  }
  return paginate;
};
