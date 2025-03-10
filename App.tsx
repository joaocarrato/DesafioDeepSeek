import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Text} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24, paddingTop: 24}}>
        <Text>Olá</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
