import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';



const AniBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App(){

  const [cep, setCep] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  //Variveis do CEP
  const [logradouro, setlogradouro] = useState('');
  const [complemento, setcomplemento] = useState('');
  const [bairro, setbairro] = useState('');
  const [localidade, setlocalidade] = useState('');
  const [uf, setuf] = useState('');
  const [ddd, setddd] = useState('');
  const [codigo, setcodigo] = useState('');

  async function ConsultarCEP(_cep){
    let url = 'https://viacep.com.br/ws/' + _cep + '/json';
    let req = await fetch(url);
    let res = await req.json();
   
    setlogradouro(res.logradouro);
    setcomplemento(res.complemento);
    setbairro(res.bairro);
    setlocalidade(res.logradouro);
    setuf(res.uf);
    setddd(res.ddd);
    setcodigo(res.codigo);
  }
  
  function Search(){    
    if(cep.length < 8){
      return;
    }    

    setModalOpen(true);
    ConsultarCEP(cep);
  }

  function FecharModal(){
    setlogradouro('');
    setcomplemento('');
    setbairro('');
    setlocalidade('');
    setuf('');
    setddd('');
    setcodigo('');

    setModalOpen(false)
  }

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
        onChangeText={ (texto) => { setCep(texto) } }
        >
        </TextInput>

        <Modal visible={modalOpen} animationType='fade' transparent={false}>
          <StatusBar backgroundColor="#1d2731" barStyle='ligth-content'/>
          <SafeAreaView style={style.modal}>
            <View>
              <TouchableOpacity style={style.buttonBack} onPress={FecharModal}>
                <Ionicons style={{marginLeft: 5, marginRight: 5}} name='md-arrow-back' size={40} color='#FFF'/>
                <Text style={style.modalTitle}>Voltar</Text>                              
              </TouchableOpacity>      

              <Text style={style.fieldTitle}>CEP:</Text>          
              <Text style={style.field}>{cep}</Text>  

              <Text style={style.fieldTitle}>Logradouro:</Text>          
              <Text style={style.field}>{logradouro}</Text> 

              <Text style={style.fieldTitle}>Complemento:</Text>          
              <Text style={style.field}>{complemento}</Text> 

              <Text style={style.fieldTitle}>Bairro:</Text>          
              <Text style={style.field}>{bairro}</Text> 

              <Text style={style.fieldTitle}>Localidade:</Text>          
              <Text style={style.field}>{localidade}</Text> 

              <Text style={style.fieldTitle}>UF:</Text>          
              <Text style={style.field}>{uf}</Text> 

              <Text style={style.fieldTitle}>DDD:</Text>          
              <Text style={style.field}>{ddd}</Text> 

              <Text style={style.fieldTitle}>Código do Municipio:</Text>          
              <Text style={style.field}>{codigo}</Text> 
            </View>
          </SafeAreaView>
        </Modal>


        <AniBtn style={style.button} onPress={Search} animation="bounceInUp" useNativeDriver duration={1500}>
          <Text style={style.buttonText}>Consultar</Text>
        </AniBtn>


        <Text  animation='BounceInUp' useNativeDriver duration={1500} style={style.dev} >Developed by: @murilogarcia23</Text>
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
  },
  modal:{
    flex: 1,
    backgroundColor: '#ffbb39'
  },
  buttonBack:{
    marginTop: 20,
    marginLeft: 5,
    marginRight: 0,
    flexDirection: 'row',

    alignItems: 'center'
  },
  modalTitle:{
    marginLeft: 10,
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25
  },
  fieldTitle:{
    color: '#1d2731',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  field:{
    color: '#1d2731',
    fontSize: 18,
    marginLeft: 10,
  }

});
