import React from 'react'
import { Text, View, Image } from 'react-native'

import NodeImg from '../assets/node.png'
import estilo from './estilos'

export default function TelaNode() {
  return (
    <View style={estilo.fundoNode}>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Node.JS</Text>
        <Image source={NodeImg} style={estilo.logo} />

        <Text style={estilo.texto}>
          Node.js é uma ferramenta que permite rodar JavaScript no servidor. Com
          isso você poderá criar o seu Back-end utilizando a linguagem
          JavaScript.
        </Text>
      </View>
    </View>
  )
}
