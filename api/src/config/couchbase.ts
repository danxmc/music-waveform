import { Cluster, N1qlQuery } from 'couchbase';

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
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
cluster.authenticate(COUCHBASE_USER!, COUCHBASE_PASSWORD!);
export const bucket = cluster.openBucket(COUCHBASE_MAIN_BUCKET);
