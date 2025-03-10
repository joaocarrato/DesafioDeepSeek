import {Post, PostAPI} from './postTypes';

function toPost(postApi: PostAPI): Post {
  return {
    id: postApi.id,
    title: postApi.title,
    body: postApi.body,
  };
}

export const postAdaptar = {toPost};
