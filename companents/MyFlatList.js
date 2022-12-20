import { StyleSheet,Text, View, FlatList } from 'react-native'
import React from 'react'
import Header from './Header';


const MyFlatList = (props) => {
    let data = props.datas;
    
    return (<>
        <Header title = "Todos Flatlist"></Header>
        <FlatList
            data = {data}
            renderItem = {ListItem}
        >
        </FlatList>
    </>);
}

let ListItem = ({item}) => {
    return(
      <View style ={styles.ListItem}>
        <Text style ={styles.listText}>{item.id}. {item.title}</Text>
      </View>
    )
  }

export default MyFlatList

const styles = StyleSheet.create({
    ListItem :{
        padding: 30,
        marginBottom :5,
        backgroundColor: "#987654",
        borderRadius:10
    },
    listText : {
        fontSize : 18,
        color: "#d5d5d5",
        fontWeight: "700"
    }
})