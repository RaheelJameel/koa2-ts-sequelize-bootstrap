import * as compose from 'koa-compose';

// Import all routes
import user from './user';

const routesToExport = [
  user,
];

export default () => compose(routesToExport);
