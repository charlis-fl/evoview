import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'common/store/store';
import { apiRootUrl } from 'common/utils/network/endpoints';

const baseQuery = fetchBaseQuery({
  baseUrl: apiRootUrl,
  prepareHeaders: (headers, { getState, endpoint }) => {
    // const { token } = (getState() as RootState).auth;
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json, text/plain, */*');
    // if (token) {
    //   headers.set('authorization', `Bearer ${token.token}`);
    // }

    if (endpoint === 's3UploadAction') {
      headers.set('authorization', '');
      headers.set('Content-Type', '');
      headers.set('enctype', 'multipart/form-data');
    }

    return headers;
  },
});

export default baseQuery;
