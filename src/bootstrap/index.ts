import { Database } from '../models/';
import { logger } from '../services/logger';

export const bootstrap = async (): Promise<void> => {
  logger.info('Bootstrap Application');
  let key: string = '';
  try {
    // Testing Database connection
    key = 'database';
    await Database.authenticate();
    logger.info('Database connected');

  } catch (err) {
    logger.error('Error while authenticating %s', key);
    await Database.close();
    throw err;
  }
  return Promise.resolve();
};
