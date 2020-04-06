import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const friendsList = [
    {name: 'sdfa'},
    {name: 'sdfaa'},
    {name: 'sdsdfa'},
    {name: 'sdfaaaa'},
    {name: 'sddfdsfa'},
    {name: 'sdwerwefa'},
    {name: 'sdettwfa'},
]

const ListScreen = () => {
    return(
        <FlatList
            keyExtractor={item => item.name}
            data={friendsList}
            renderItem={({item}) =>{
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;