export const limit: number = 10;
export const offset: number = 0;
export const maxLimit: number = 1000;
export const sortBy: string = 'createdAt';

export enum SortOrder {
  asc = 'ASC',
  desc = 'DESC'
}

export const sortOrders: string[] = Object.values(SortOrder);
