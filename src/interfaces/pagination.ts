import { Order } from 'sequelize/types';
import { SortOrder } from '../constants/pagination';

export interface PaginationState {
  limit: number;
  offset: number;
  sortBy: string;
  sortOrder: SortOrder;
  totalCount?: number;
}

export interface PaginateOptions {
  order?: Order;
  limit?: number;
  offset?: number;
}
