import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, FlatList, Modal } from 'react-native';


export default function App(){

  return(
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor="#ffbb39" barStyle='dark-content'/>

        <View style={style.containerText}>
          <Text style={style.title}>Meu CEP</Text>
        </View>
        <Text style={style.textCEP}>CEP:</Text>
        <TextInput 
        placeholder='Informe o CEP' 
        style={style.input}
        keyboardType='numeric'
        maxLength={8}
        >
        </TextInput>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Consultar</Text>
        </TouchableOpacity>
        <Text style={style.dev}>Developed by: @murilogarcia23</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1d2731'
  },
  containerText:{
    backgroundColor: '#ffbb39',

    borderRadius: 20,

    marginRight: 30,
    marginLeft: 30,
    marginTop: 90,
    marginBottom: 10,
    
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    color: '#083c5d',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',

    marginTop: 10,
    marginBottom: 10
  },
  input:{
    backgroundColor: '#FFF',

    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 5,

    fontSize: 30,

    borderRadius: 15,
  },
  textCEP:{
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 25,
    marginTop: 40,
    marginLeft: 30,
  },
  button:{
    backgroundColor: '#ffbb39',

    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 10,
    paddingRight: 5,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 20,
  },
  buttonText:{
    color: '#083c5d',
    fontSize: 25
  },
  dev:{
    color: '#FFF',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%'
  }

});
