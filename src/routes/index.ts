import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import { Context } from 'koa';

// Import all routes
import user from './user';

const router = new Router<any, Context>({
  prefix: '/api/v1',
});

const routes = router.routes();

const routesToExport = [
  routes,
  user,
];

export default () => compose(routesToExport);
