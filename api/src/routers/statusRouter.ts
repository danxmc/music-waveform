/**
 * Status endpoints, used for monitoring and debugging purposes.
 */
import PromiseRouter from 'express-promise-router';
import { N1qlQuery } from 'couchbase';
import logger from '../modules/logger';
import { bucket } from '../config/couchbase';

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
  res.status(200).json({ message: 'ok' });
});

/**
 * @swagger
 * /status/akido-mode:
 *   get:
 *     tags:
 *       - Misc
 *     summary: >
 *       Returns a HTTP 200 OK response if the API can connect to the CouchDB Cluster
 *     responses:
 *       "200":
 *         description: THe CouchDB Cluster is reachable.
 */
router.get('/couchbase', async (req, res) => {
  const dbQuery = 'SELECT 1';
  bucket.query(N1qlQuery.fromString(dbQuery), (err, queryRes) => {
    if (err) {
      logger.error(err);
    }
    if (queryRes?.length) {
      res.status(200).json({ message: 'ok' });
    }
  });
});

export default router;
