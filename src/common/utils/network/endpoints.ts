/* eslint-disable @typescript-eslint/naming-convention */
import runtimeEnv from '@mars/heroku-js-runtime-env';

const { REACT_APP_API_URL, REACT_APP_GOOGLE_MAPS_API_KEY } = runtimeEnv();

export const apiRootUrl = `${REACT_APP_API_URL}/api/v1`;
export const mapAPIKey = `${REACT_APP_GOOGLE_MAPS_API_KEY}`;

// RTK Query

export const signInUrl = '/login';