import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import logger from './modules/logger';

import apiRouter from './routers';

const app: express.Application = express();

// Configure middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure Morgan logging (HTTP requests and errors)
const loggerFormat = '[:date[web]] ":method :url" :status :response-time';

app.use(
  morgan(loggerFormat, {
    skip(_req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr,
  }),
);
app.use(
  morgan(loggerFormat, {
    skip(_req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout,
  }),
);

// Router
app.use('/', apiRouter);

// catch 404 and forward to error handler
const notFoundHandler: ExpressMiddleware = (_req, _res, next) => {
  const err: ResponseError = new Error('Not Found');
  err.status = 404;
  next(err);
};
app.use(notFoundHandler);

// error handler
const errorHandler: ExpressErrorHandler = (err, _req, res, _next) => {
  logger.error({ message: err.message, statusCode: err.statusCode });

  // render the error page
  res.status(err.statusCode || err.status || 500);
  res.send(JSON.stringify(err.message));
};
app.use(errorHandler);

export default app;
