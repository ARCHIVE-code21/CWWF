import React, {Component, useState} from 'react';
import { StyleSheet, Platform } from 'react-native';

import { View, Text, Button } from "react-native";

import { Video } from 'expo-av';

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

class VideoScreen extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            item: this.props.navigation.state.params.item
        }
    }

    render() {
        return (
                <View style={styles.videoView}>
                    <Text style={styles.font_L}>VideoPage{'\n'}</Text>
                    <Video
                        useNativeControls
                        isLooping
                        source={{uri: this.state.item.cctv_url}}
                        style={styles.videoStyle}
                        resizeMode="contain"
                    />
                </View>
        );
    }
}

VideoScreen.defaultProps = {
    cctv_url : "cctv_url"
}

export default VideoScreen;