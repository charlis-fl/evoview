import {
  treeInfo,
} from 'common/utils/network/endpoints';
import { baseApi } from 'common/store/baseApi';
import {
  TreeRequest,
  TreeResponse,
} from './types';

export const TreeOfLifeAPI = baseApi
  .enhanceEndpoints({ addTagTypes: [] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTreeInfo: builder.mutation<TreeResponse, TreeRequest>({
        query: (formData) => ({
          url: treeInfo,
          method: 'POST',
          body: formData,
        }),
      }),
    }),
  });
export const {
  useGetTreeInfoMutation,
} = TreeOfLifeAPI;

export default TreeOfLifeAPI;
