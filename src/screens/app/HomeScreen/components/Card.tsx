import React from 'react';

import {Post} from '@domain';

import {Box, BoxProps, Text} from '@components';

interface Props {
  post: Post;
}
export function Card({post}: Props) {
  return (
    <Box {...$boxWrapper}>
      <Text semiBold mb="s8">
        {post.title}
      </Text>
      <Text preset="paragraphSmall" numberOfLines={2}>
        {post.body}
      </Text>
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  borderWidth: 1,
  borderColor: 'amaranth',
  padding: 's12',
  borderRadius: 's12',
  mb: 's12',
};
