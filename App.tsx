if (__DEV__) {
  require('./ReactotronConfig');
}
import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Screen, Text} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Screen>
          <Text>Olá</Text>
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
