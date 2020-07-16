import * as winston from 'winston';

const LOG_LEVELS = {
  DEBUG: 'debug',
  ERROR: 'error',
  INFO: 'info',
};

const envLevels = new Map();
envLevels.set('production', LOG_LEVELS.INFO);
envLevels.set('test', LOG_LEVELS.INFO);

const envLevel = process.env.NODE_ENV || LOG_LEVELS.INFO;

const level = process.env.LOG_LEVEL || envLevel;
const format =
  process.env.NODE_ENV === 'production'
    ? winston.format.json()
    : winston.format.simple();
const logger = winston.createLogger({
  format,
  transports: [new winston.transports.Console({ level })],
});

export default logger;
