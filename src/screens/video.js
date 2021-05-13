import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';

import { View, Text, Button } from "react-native";

import { Video, AVPlaybackStatus } from 'expo-av';

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    font_L:{
        fontSize: 50,
        fontWeight:'bold',
        shadowColor: 'rgba(0,0,0,0.2)'
    },
    font_M:{
        fontSize:30,
    },
    button: {
        width: 70,
        height: 30,
    },


    // VideoView resizeMode
    videoView: {
        justifyContent: 'center',
        flex: 1,
        alignItems:'center',
        flexDirection: 'column',
        },

        videoStyle: {
            alignSelf:'center',
            width: 300,
            height: 200,
        },
});

// video Sample file url
// http://techslides.com/demos/sample-videos/small.mp4

const url = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

class VideoScreen extends Component {

    render() {
        return (
            <>
                <View style={styles.videoView}>
                    <Text style={styles.font_L}>VideoPage{'\n'}</Text>
                    <Video
                        useNativeControls
                        isLooping
                        source={{uri: url,}}
                        style={styles.videoStyle}
                        resizeMode="contain"
                    />
                </View>
            </>
        );
    }
}

export default VideoScreen;
