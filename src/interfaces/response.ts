export interface Response {
  meta: MetaData;
  data?: any;
}

export interface MetaData {
  status: number;
  message: string;
  stack?: string;
}
