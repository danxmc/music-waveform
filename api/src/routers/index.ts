import PromiseRouter from 'express-promise-router';

import { ENABLE_SWAGGER_DOCS } from '../config/config';

import statusRouter from './status';

const router = PromiseRouter();

router.use('/status', statusRouter);

// Lazy load dependencies
(async () => {
  if (ENABLE_SWAGGER_DOCS) {
    const apiDocRouter = await import('./swagger');
    router.use(apiDocRouter.default);
  }
})();

export default router;
