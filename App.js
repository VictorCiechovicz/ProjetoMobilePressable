import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TelaJavaScript from './Componentes/TelaJavaScript'
import TelaNode from './Componentes/TelaNode'
import TelaReact from './Componentes/TelaReact'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JavaScript" component={TelaJavaScript} />
        <Stack.Screen name="React" component={TelaReact} />
        <Stack.Screen name="NodeJS" component={TelaNode} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
