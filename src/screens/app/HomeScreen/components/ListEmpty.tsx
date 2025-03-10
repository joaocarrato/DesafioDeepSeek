import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';

type Props = {
  isLoading: boolean;
  isError: boolean;
};
export function ListEmpty({isLoading, isError}: Props) {
  const {colors} = useAppTheme();

  if (isLoading) {
    <Box flex={1} alignItems="center" justifyContent="center">
      <ActivityIndicator color={colors.primary} />
    </Box>;
  }

  if (isError) {
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Falha ao encontrar posts</Text>
    </Box>;
  }
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Nenhum post encontrado </Text>
    </Box>
  );
}
