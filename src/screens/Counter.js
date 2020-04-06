import React, {useReducer} from 'react';
import {Button, Text, View} from 'react-native';

const reducer = (state, {type}) => {
    switch(type) {
        case "Increase":
            return {...state, count: state.count + 1};
        case "Decrease": 
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

    return <View>
        <Button
            title="Increase"
            onPress={()=>dispatch({type: "Increase"})}
        />

        <Button
            title="Decrease"
            onPress={()=>dispatch({type: "Decrease"})}
        />
        <Text>Counter: {state.count}</Text>
    </View>
}

export default Counter;