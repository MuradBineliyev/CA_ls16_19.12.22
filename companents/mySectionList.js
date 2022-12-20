import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'

const mySectionList = (props) => {
    let propsData = props.datas
    let data =[];

    propsData.forEach(e => {
        let sectionItem = data.find(q => q.title == e.userId);

        if (sectionItem) {
            sectionItem.data.push(e);
        }
        else {
            let itemSample = {
                title: e.userId,
                data: [e]
            }

            data.push(itemSample);
        }
    });

    return (
    <View>
        <Header
            title = "Todos Section List"
        />
        <SectionList
            sections={data}
            renderItem = {a}
            renderSectionHeader = {({section : {title}}) => (
                <Text style = {Styles.title}> userId: {title}</Text>
            )}
        ></SectionList>
    </View>
  )
}

const a = ({item}) => {
    return (<>
        <Text style = {Styles.Items}>{item.title}</Text>
    </>)
}

export default mySectionList

const Styles = StyleSheet.create({
    title:{
        paddingVertical:20,
        backgroundColor : "lightblue",
        marginBottom : 5
    },
    Items: {
        padding : 10,
        backgroundColor : "yellow",
        marginBottom : 5,
        borderRadius :15
    }
})