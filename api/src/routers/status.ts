/**
 * Status endpoints, used for monitoring and debugging purposes.
 */
import PromiseRouter from 'express-promise-router';

const router = PromiseRouter();

/**
 * @swagger
 *
 * /status/always-ok:
 *   get:
 *     description: Status of the application
 *     tags:
 *       - Misc
 *     summary: >
 *       Always returns a HTTP 200 OK.
 *       If this URL returns something else, it means the app is down.
 *     responses:
 *       "200":
 *         description: The API is online.
 */
router.get('/always-ok', (req, res) => {
  res.json({ message: 'ok' });
});

/**
 * @swagger
 * /status/akido-mode:
 *   get:
 *     tags:
 *       - Misc
 *     summary: >
 *       Returns specific environment information: the version and
 *       the environment
 *     responses:
 *       "200":
 *         description: The environment and version of this API.
 */
router.get('/akido-mode', (req, res) => {
  res.json({
    environment: process.env.SENTRY_ENVIRONMENT || 'local',
    version: process.env.CALVER || process.env.SENTRY_VERSION || 'unavailable',
  });
});

export default router;
