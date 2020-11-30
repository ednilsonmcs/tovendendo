import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../../src/assets/logo.png')}
        />
      </View>
      <View 
        style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <TextInput 
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Categories')}>
          <Text style={styles.btnSubmitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('SingIn')}>
          <Text style={styles.btnRegisterText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1C1C1C'
    }, 
    containerLogo:{
      flex:1,
      justifyContent: 'center'
    },
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      width:'90%',
    },
    input:{
      backgroundColor: '#FFF',
      width:'90%',
      marginBottom:15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding:10
    },
    btnSubmit:{
      backgroundColor: '#35AAFF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
    btnSubmitText:{
      color: '#FFFFFF',
      fontSize: 18
    },
    btnRegister:{
      marginTop:10,
    },
    btnRegisterText:{
      color: '#FFFFFF',
    }
});