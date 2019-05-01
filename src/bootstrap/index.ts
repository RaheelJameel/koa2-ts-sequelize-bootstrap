import { Database } from '../models/';
import { logger } from '../services/logger';

export const bootstrap = async (): Promise<void> => {
    let key: string = '';
    try {
        // Testing Database connection
        key = 'database';
        await Database.authenticate();
        logger.info('database connected');

    } catch (err) {
        logger.error('Error while authenticating %s', key);
        await Database.close();
        throw err;
    }
    return Promise.resolve();
};
