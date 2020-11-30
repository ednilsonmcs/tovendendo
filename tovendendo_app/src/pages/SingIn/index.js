import React from 'react';

import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function SingIn({ navigation }) {
    return (
      <KeyboardAvoidingView style={styles.background}>
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
  
          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.btnSubmitText}>Cadastrar</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnRegisterText}>Login</Text>
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