import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';import { enableScreens } from 'react-native-screens';

import Dummy from './src/screens/Dummy';

export type RootStackParamList = {
  Dummy: undefined;
};

const App = () => {
  enableScreens();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dummy" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
