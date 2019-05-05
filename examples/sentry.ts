import { BaseError, Logger } from '../lib';

const logger = Logger.initialize({ 
  level: 'silly',
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
});

logger.silly('silly', { a: 1 });
logger.verbose('verbose', { b: 2 });
logger.info('info', { c: 3 });
logger.debug('debug', { d: 4 });
logger.warn(new BaseError('warning', { invalid: ['name'] }));
logger.error(new BaseError('error', { exception: 'gateway error' }));

// Wait a little bit because some logger process are async
setTimeout(() => true, 5000);