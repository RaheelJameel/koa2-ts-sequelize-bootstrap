import * as compose from 'koa-compose';

// Import all routes
import user from './user';
import project from './project';

const routesToExport = [
  user,
  project,
];

export default () => compose(routesToExport);
