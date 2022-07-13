import React from 'react'
import { Text, View, Button, Image, Pressable } from 'react-native'

import javascriptImg from '../assets/javascript.png'
import estilo from './estilos'

export default function TelaJavaScript(props) {
  return (
    <View style={estilo.fundoJS}>
      <View style={estilo.container}>
        <Image source={javascriptImg} style={estilo.logo} />

        <Text style={estilo.titulo}>JavaScript</Text>

        <Text style={estilo.texto}>
          Veja 2 tecnologias para se tornar um programador fullstack web
          JavaScript.
        </Text>

        <View style={estilo.boxBotoes}>
          <Pressable
            onPress={() => {
              props.navigation.navigate('React')
            }}
          >
            <Image
              style={estilo.img}
              source={{
                uri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
              }}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              props.navigation.navigate('NodeJS')
            }}
          >
            <Image
              style={estilo.img}
              source={{
                uri: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
              }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  )
}
