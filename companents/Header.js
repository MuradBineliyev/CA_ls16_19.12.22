import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style = {styles.companents}>
      <Text style ={{fontSize:32}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    companents :{
        flex:1,
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor : "#a1a1a1",
        marginBottom : 5,
    }
})
export default Header