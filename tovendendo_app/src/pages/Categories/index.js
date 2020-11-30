import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

const dataList = [{id: 1, nome: 'Pizza'}, {id: 2, nome: 'Japonesa'}, {id: 3, nome: 'Açai'}, {id: 4, nome: 'Japonesa'}, {id: 5, nome: 'Árabe'}, {id: 6, nome: 'Italiana'}];
const numColumns = 2;
const WIDTH = Dimensions.get('window').width;

export default function Categories({ navigation }) {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.itemCategories} onPress={() => navigation.navigate('Products', item)}>
        <Text style={styles.itemTextCategories}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <KeyboardAvoidingView style={styles.containerCategories}>
      <View>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    containerCategories:{
      flex:1,
      backgroundColor: '#1C1C1C',
      paddingTop:40,    
    },
    itemTextCategories:{
      color: '#FFF',
      fontSize:30,
    },
    itemCategories:{
      backgroundColor: '#3232ff',
      alignItems: 'center',
      justifyContent: 'center',
      height:100,
      flex:1,
      margin:1,
      height: WIDTH /numColumns,
      borderRadius:10
    }
});