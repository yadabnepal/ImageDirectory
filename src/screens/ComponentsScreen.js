import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Welcome to new app</Text>
            <Text >Hi there!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
})

export default ComponentsScreen;