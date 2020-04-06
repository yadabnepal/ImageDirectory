import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import ImageBlock from '../components/ImageBlock';

const blocks = [
    {title:'Forest', imageSource: '../../assets/images/forest.jpg'},
    {title:'Beach', imageSource: '../../assets/images/beach.jpg'},
    {title:'Mountain', imageSource: '../../assets/images/mountain.jpg'},
]

const ImageScreen = () => {
    return(
        <View>
            <ImageBlock title="hello"/>
        </View>
    )
}

export default ImageScreen;