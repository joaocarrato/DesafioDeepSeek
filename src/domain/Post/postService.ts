import {postAdaptar} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const posts = await postApi.getList();

  return posts.map(postAdaptar.toPost);
}

export const postService = {getList};
