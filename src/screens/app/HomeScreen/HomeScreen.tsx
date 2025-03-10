import React from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {Post, useGetPost} from '@domain';

import {Box, Screen} from '@components';
import {useAppSafeArea} from '@hooks';

import {Card} from './components/Card';
import {ListEmpty} from './components/ListEmpty';
import {ListHeader} from './components/ListHeader';

export function HomeScreen() {
  const {bottom} = useAppSafeArea();

  const {posts, isError, isLoading, refetch} = useGetPost();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <Card post={item} />;
  }

  return (
    <Screen>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ListHeader />}
        data={posts}
        ListEmptyComponent={
          <ListEmpty isError={isError} isLoading={isLoading} />
        }
        ListFooterComponentStyle={{paddingBottom: bottom}}
        ListFooterComponent={<Box />}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Screen>
  );
}
