import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from '~/pages/Main';
import Imc from '~/pages/Calculator';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{title: 'Pagina Inicial'}}
      />
      <Stack.Screen
        name="Calculator"
        component={Imc}
        options={{title: 'Calculadora'}}
      />
    </Stack.Navigator>
  );
}
