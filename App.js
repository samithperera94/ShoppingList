import React, {useState} from "react";
import { View,Text,Image,StyleSheet,FlatList } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
// import { uuid } from 'uuidv4';

const initalItems = [
  {id: 1, text: 'Milk'},
  {id: 2, text: 'Butter'},
  {id: 3, text: 'Cheese'},
  {id: 4, text: 'Yougurt'}
];
const App = () => {
  const [items,setItems] = useState(initalItems);

  const itemDeleteHandler = (id) => {
    console.log("id")
    setItems((prevState)=>{
      return prevState.filter((item) => item.id !== id)
    })
  }
  return(
    <View style={styles.container}>
      <Header title='Shopping Cart'/>
      <FlatList         
        data={items}
        renderItem={({item}) => <ListItem item={item} onPress={itemDeleteHandler} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:160,
  }
  
});
export default App;