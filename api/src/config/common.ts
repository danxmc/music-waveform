/**
 * List of configuration variables, hardcoded or depending on environment variables
 *
 * Ideally, no code outside of config.js should use `process.env.`. This would make it easier to see
 * all the environment variables being used by the app in a single place (with comments).
 */

/** Secret string for private endpoints */
export const AUTHORIZATION_SHARED_SECRET =
  process.env.AUTHORIZATION_SHARED_SECRET || '';

/** Should we render the API documentation on the API? */
export const ENABLE_SWAGGER_DOCS = process.env.ENABLE_SWAGGER_DOCS === 'true';

export const IS_PROD = process.env.NODE_ENV === 'production';

// Couchbase configuration
export const {
  // Couchbase cluster can be multiple nodes
  COUCHBASE_URL,
  COUCHBASE_URL2,
  COUCHBASE_URL3,

  COUCHBASE_PORT,

  COUCHBASE_USER,
  COUCHBASE_PASSWORD,

  COUCHBASE_MAIN_BUCKET,
} = process.env;
