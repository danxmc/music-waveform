import PromiseRouter from 'express-promise-router';

import { ENABLE_SWAGGER_DOCS } from '../config/common';

import statusRouter from './statusRouter';
import audioRouter from './audioRouter';

const router = PromiseRouter();

router.use('/status', statusRouter);
router.use('/audios', audioRouter);

// Lazy load dependencies
(async () => {
  if (ENABLE_SWAGGER_DOCS) {
    const apiDocRouter = await import('./swaggerRouter');
    router.use(apiDocRouter.default);
  }
})();

export default router;
