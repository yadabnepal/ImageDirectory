import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Button 
        title="Component Screen" 
        onPress={()=>props.navigation.navigate("List")} 
        style={styles.button}>
      </Button>
      <Button 
        title="List Screen" 
        onPress={()=>props.navigation.navigate("Components")} 
        style={styles.button}>
      </Button>
      <Button 
        title="Image Screen" 
        onPress={()=>props.navigation.navigate("ImageList")} 
        style={styles.button}>
      </Button>
      <Button 
        title="Counter Screen" 
        onPress={()=>props.navigation.navigate("Counter")} 
        style={styles.button}>
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginTop: 5
  }
});

export default HomeScreen;
