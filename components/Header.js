import React from "react";
import { View,Text,Image,StyleSheet } from "react-native";
const Header = ({title})=> {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>          
        </View>
      )
}

Header.defaultProps = {
    title : 'Shopping List'
}
const styles = StyleSheet.create({
    container:{
      height:60,
      padding:15,
    //   backgroundColor:'#066317',
    },
    text:{
      color:'#000',
      fontSize:23,
      textAlign:'center',
      backgroundColor:'#066317',
    },
    
  });
export default Header;