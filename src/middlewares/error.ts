import * as Boom from 'boom';
import { Context } from 'koa';
import * as compose from 'koa-compose';
import { MetaData } from '../interfaces/response';
import * as Joi from 'joi';

const isProduction = process.env.NODE_ENV === 'production';
/**
 * Return middleware that handle exceptions in Koa.
 * Dispose to the first middleware.
 *
 * @return {function} Koa middleware.
 */
const handler = async (ctx: Context, next: () => void) => {
  try {
    await next();
  } catch (err) {
    let metaData: MetaData;
    if (err.isJoi) {
      metaData = handleJoiError(err);
    } else if (err.isBoom) {
      metaData = handleBoomError(err);
    } else {
      metaData = handleDefaultError(err);
    }
    if (err.data) {
      metaData.message = metaData.message + err.data;
    }
    if (!isProduction) {
      metaData.stack = err.stack;
    }
    ctx.status = +metaData.status;
    ctx.body = {
      meta: metaData
    };
    ctx.app.emit('error', err, ctx);
  }
};

const handleBoomError = (err: Boom): MetaData => {
  return {
    status: +err.output.statusCode,
    message: err.message
  } as MetaData;
};

const handleJoiError = (err: Joi.ValidationError): MetaData => {
  return {
    status: 400,
    message: err.details[0].message
  };
};

const handleDefaultError = (err: any): MetaData => {
  return {
    status: 500,
    message: err.message || 'internal_server_error'
  };
};

export default () => compose([
  handler,
]);
