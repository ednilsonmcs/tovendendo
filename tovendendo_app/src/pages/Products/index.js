import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

const numColumnsProducts = 1;

export default function Products({ route }) {
  let idCategory = route.params.id;
  let dataListProducts;
  switch (idCategory) {
    case 1:
      dataListProducts = [{id: 1, nome: 'Calabresa'}, {id: 2, nome: 'Três Queijos'}, {id: 3, nome: 'Frango'}, {id: 4, nome: 'Brigadeiro'}, {id: 5, nome: 'Do Chefe'}, {id: 6, nome: 'Quatro Queijos'}];
      break;
    case 2:
      dataListProducts = [{id: 1, nome: 'Da casa'}, {id: 2, nome: 'O melhor'}, {id: 3, nome: 'O melhor'}, {id: 4, nome: 'O melhor'}, {id: 5, nome: 'O melhor'}, {id: 6, nome: 'O melhor'}];
      break;
    case 3:
      dataListProducts = [{id: 1, nome: 'Da casa'}, {id: 2, nome: 'O melhor'}, {id: 3, nome: 'O melhor'}, {id: 4, nome: 'O melhor'}, {id: 5, nome: 'O melhor'}, {id: 6, nome: 'O melhor'}];
      break;
    case 4:
      dataListProducts = [{id: 1, nome: 'Da casa'}, {id: 2, nome: 'O melhor'}, {id: 3, nome: 'O melhor'}, {id: 4, nome: 'O melhor'}, {id: 5, nome: 'O melhor'}, {id: 6, nome: 'O melhor'}];
      break;
    case 5:
      dataListProducts = [{id: 1, nome: 'Da casa'}, {id: 2, nome: 'O melhor'}, {id: 3, nome: 'O melhor'}, {id: 4, nome: 'O melhor'}, {id: 5, nome: 'O melhor'}, {id: 6, nome: 'O melhor'}];
      break;
    case 6:
      dataListProducts = [{id: 1, nome: 'Da casa'}, {id: 2, nome: 'O melhor'}, {id: 3, nome: 'O melhor'}, {id: 4, nome: 'O melhor'}, {id: 5, nome: 'O melhor'}, {id: 6, nome: 'O melhor'}];
      break;
    default:
      dataListProducts = [];
      break;
  }
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.itemCategories} >
        <Text style={styles.itemTextCategories}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <KeyboardAvoidingView style={styles.containerCategories}>
      <View>
      <FlatList
        data={dataListProducts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumnsProducts}
      />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    containerLogo:{
      flex:1,
      justifyContent: 'center'
    },
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
      borderRadius:10
    }
});