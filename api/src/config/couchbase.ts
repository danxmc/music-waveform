import { Cluster } from 'couchbase';
import { promisify } from 'util';

import {
  COUCHBASE_URL,
  COUCHBASE_URL2,
  COUCHBASE_URL3,
  COUCHBASE_PORT,
  COUCHBASE_USER,
  COUCHBASE_PASSWORD,
  COUCHBASE_MAIN_BUCKET,
} from './common';

const connectionString = COUCHBASE_URL2
  ? `${COUCHBASE_URL}:${COUCHBASE_PORT},${COUCHBASE_URL2}:${COUCHBASE_PORT},${COUCHBASE_URL3}:${COUCHBASE_PORT}`
  : `${COUCHBASE_URL}:${COUCHBASE_PORT}`;

export const cluster = new Cluster(connectionString);
cluster.authenticate(COUCHBASE_USER || '', COUCHBASE_PASSWORD || '');
export const bucket = cluster.openBucket(COUCHBASE_MAIN_BUCKET);

export const queryAsync = promisify(bucket.query).bind(bucket);
export const insertAsync = promisify(bucket.insert);
export const replaceASync = promisify(bucket.replace);
export const upsertAsync = promisify(bucket.upsert);
export const getAsync = promisify(bucket.get);
export const getMultiASync = promisify(bucket.getMulti);
