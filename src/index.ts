import * as Koa from 'koa';
import * as mount from 'koa-mount';
import * as serve from 'koa-static';
import * as koaBody from 'koa-body';
import * as helmet from 'koa-helmet';
import * as jsonMiddleware from 'koa-json';
import * as userAgent from 'koa-useragent';

import { bootstrap } from './bootstrap/';
import { logger } from './services/logger';
import errorMiddleware from './middlewares/error';
import responseMiddleware from './middlewares/response';
import logMiddleware from './middlewares/log';
import routeMiddleware from './routes/index';
import fallbackMiddleware from './middlewares/fallback';
import panignationMiddleware from './middlewares/panignation';

bootstrap()
  .then(() => {
    const app = new Koa();
    // Serve api docs
    if (process.env.NODE_ENV !== 'production') {
      app.use(mount('/api/docs', serve('doc')));
    }
    app.use(koaBody({ jsonLimit: '50mb', formLimit: '50mb', multipart: true, json: true }));
    app.use(helmet({ noCache: true }));
    app.use(userAgent);
    app.use(logMiddleware(logger));
    app.use(errorMiddleware());
    app.use(jsonMiddleware());
    app.use(panignationMiddleware());
    app.use(responseMiddleware());
    app.use(routeMiddleware());
    app.use(fallbackMiddleware());
    app.listen(process.env.API_PORT, () => {
      logger.info(`Current environment: ${process.env.NODE_ENV}`);
      logger.info(`Server started at port: ${process.env.API_PORT}`);
    });
    // centralized error logging as per KOA docs
    app.on('error', (error, ctx) => {
      ctx.log.error(error);
    });
  })
  .catch((err: any) => logger.error(err));
