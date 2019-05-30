export interface AppResponse {
  meta: MetaData;
  data?: any;
}

export interface MetaData {
  status: number;
  message: string;
  limit?: number;
  offset?: number;
  totalCount?: number;
  stack?: string;
}
