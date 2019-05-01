import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import { Context } from 'koa';
import { getAll, create } from '../controllers/user';

const router = new Router<any, Context>({
  prefix: '/api/v1/users',
});

router.get('/', getAll);

router.post('/', create);

const routes = router.routes();

export default compose([
  routes
]);
