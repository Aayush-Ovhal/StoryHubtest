import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <Header
                 backgroundColor = {"#144BF6"}
                 centerComponent = {{
                     text: "Story Hub"
                 }}
                />
                <Text>
                 ReadScreen
                </Text>
            </View>
        )
    }
}