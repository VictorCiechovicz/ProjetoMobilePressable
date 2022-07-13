import { StyleSheet } from 'react-native'

const estilo = StyleSheet.create({
  fundoJS: {
    flex: 1,

    backgroundColor: '#f7df1e'
  },

  fundoReact: {
    flex: 1,
    backgroundColor: '#61dafb'
  },

  fundoNode: {
    flex: 1,
    backgroundColor: '#84bd48'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    fontWeight: 200,
    flex: 1
  },

  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
    backgroundColor: '#fff'
  },

  boxBotoes: {
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-around'
  },
  img: {
    width: 100,
    height: 100
  },
  titulo: {
    fontSize: 26,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  texto: {
    fontSize: 18,
    marginBottom: 60,
    textAlign: 'center'
  }
})

export default estilo
