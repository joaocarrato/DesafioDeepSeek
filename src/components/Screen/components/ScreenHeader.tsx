import React from 'react';

import {Icon, Text, TouchableOpacityBox} from '@components';

type Props = {
  canGoBack?: boolean;
};
export function ScreenHeader({canGoBack}: Props) {
  return (
    <>
      {canGoBack && (
        <TouchableOpacityBox flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphSmall" semiBold ml="s8">
            Voltar
          </Text>
        </TouchableOpacityBox>
      )}
    </>
  );
}
