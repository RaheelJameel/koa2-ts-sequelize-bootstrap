import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import { Context } from 'koa';
import { getAll, create } from '../controllers/project';

const router = new Router<any, Context>({
  prefix: '/api/v1/projects',
});

router.get('/', getAll);

router.post('/', create);

const routes = router.routes();

export default compose([
  routes
]);
