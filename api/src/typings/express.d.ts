import { Request, Response, NextFunction } from 'express';

// we define the following types / interfaces globally meaning importing them manually is not needed
declare global {
  // We want an Error type that can be thrown from controllers and trigger an error response with an
  // arbitrary response code. This error code is assumed to be in a "status" property of the error
  // object.
  interface ResponseError extends Error {
    status?: number;
    // Some libraries might use "statusCode" instead
    statusCode?: number;
  }

  type ExpressMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => void;

  type ExpressErrorHandler = (
    error: ResponseError,
    request: Request,
    response: Response,
    next: NextFunction,
  ) => void;

  type ExpressAsyncController = (req: Request, res: Response) => Promise<void>;
}
