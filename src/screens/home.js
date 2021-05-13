import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import { View, Text, Button } from "react-native";

    const styles = StyleSheet.create({

    // topScreen: {
    //     height: 80,
    //     backgroundColor: '#2F15'
    // },
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    font_L:{
        fontSize:50,
        fontWeight:'bold',
        shadowColor: 'rgba(0,0,0,0.2)'
    },
    font_M:{
        fontSize:30,
    },
    font_S:{
        fontSize:20,
    },
    button: {
        width: 70,
        height: 30,
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <>
                <View style={styles.topScreen}/>

                <View style={styles.container}>
                    <Text style={styles.font_L}>User Guide</Text>
                    <Text style={styles.font_S}>
                        {"1. You choose a video \n"}
                        {"2. Look at the current situation \n"}
                        {"3. END"}
                    </Text>
                </View>
            </>
        );
    }
}

export default HomeScreen;
