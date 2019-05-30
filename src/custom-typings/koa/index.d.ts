import { Context } from 'koa';
import { PaginationState } from '../../interfaces/pagination';

declare module 'koa' {
  interface Context {
    state: {

      /**
       * Data to be sent back in the response data
       *
       * @type {*}
       */
      data?: any;

      /**
       * Message to be sent back in the response meta message
       *
       * @type {string}
       */
      message?: string;

      /**
       * Set the response status code
       *
       * If not set and Context.data field is set then status code of 200 will be returned
       *
       * If not set and Context.data field is also not set then status code of 404 will be returned
       *
       * @type {number}
       */
      status?: number;

      /**
       * PaginationState for GET requests
       *
       * @type {PaginationState}
       */
      pagination?: PaginationState;

      [index: string]: any
    };
  }
}
