import React,{useState} from "react";
import { View,Text,Image,StyleSheet,TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';



const AddItem = (props) => {
    const [text,setText] = useState('');
    const onChangeHandler = (textValue) => setText(textValue);
    const onBtnPressHandler = () => {
        props.onPress(text);
        setText('');
    }
    return(
        <View style={styles.card}>
            <TextInput placeholder="Add Item ..." 
            style={styles.input}
            onChangeText={onChangeHandler}
            value={text}
            />
            <TouchableOpacity style={styles.btn} onPress={onBtnPressHandler}>
                <Text style={styles.btnText}>  
                <Icon name="plus" size={20} />
                Add Item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        // backgroundColor:'#aee5ea',
        // border:'1px solid #21130d',
        borderColor:'#000'
    },
    input:{
        height:60,
        // width:300,
        padding:8,
        margin:5,
        // fontSize:16,
        // color:'#063970',
        // border: '1px solid red',
        // backgroundColor:'#aee5ea',
      },
      btn:{
        backgroundColor:'#c2bad8',
        padding:9,
        margin:5
      },
      btnText:{
        color:'#000',
        fontSize:20,
        textAlign:'center',
      },
  });
export default AddItem;