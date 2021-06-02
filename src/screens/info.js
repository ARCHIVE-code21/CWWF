import React, { Component } from 'react';
import { StyleSheet, Platform, Linking } from 'react-native';

import { View, Text, Button } from "react-native";

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    font_L:{
        fontSize:50,
        fontWeight: 'bold',
        shadowColor: 'rgba(0,0,0,0.2)'
    },
    font_M:{
        fontSize:30,
        fontWeight: 'bold'
    },
    button: {
        width: 70,
        height: 30,
    }
});

class InfoScreen extends Component {
    render() {
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.font_M}>Crosswalk_Watcher{"\n"}</Text>
                    <Text>{"\n 김형준 \n 이상규 \n 박보성 \n\n"}</Text>

                    <Text style={{color: 'blue', fontWeight: 'bold'}}
                        onPress={() => Linking.openURL('https://github.com/junnikym/CrosswalkWatcher')}
                        >Go to git</Text>
                </View>
            </>
        );
    }
}

export default InfoScreen;
