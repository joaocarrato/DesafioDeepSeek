import {api} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PostAPI[]> {
  const response = await api.get<PostAPI[]>('posts');
  return response.data;
}

export const postApi = {getList};
