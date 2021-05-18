import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import { View, Text, Button, TextInput } from "react-native";

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font_L:{
        fontSize: 40,
        fontWeight:'bold',
        shadowColor: 'rgba(0,0,0,0.2)'
    },
    font_M:{
        fontSize:30,
    },
    button: {
        
    },
    textInput:{
        fontSize: 30,
    }
});

export default class MainScreen extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.font_M}>
                {"Wellcome to"}
            </Text>
            <Text style={styles.font_L}>
                {"Crosswalk Watcher" }
            </Text>

            <Text>{"\n"}</Text>

                <TextInput
                    style={styles.textInput}
                    placeholder="ID input."
                    />

            <Button 
                title="Getting started"
                onPress={() => this.goScreenHome()} />
        </View>
        );
    }

    goScreenHome(){
        this.props.navigation.navigate('Home');
    }
}


