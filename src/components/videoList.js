import React, {Component} from 'react';
import { View, Text, StyleSheet, 
        FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import { Video, AVPlaybackStatus } from 'expo-av';

const url = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

export default class videoList extends Component{

    constructor(){
        super();

        this.state={
            datas: [
                {name:"cctv1", message:"address"},
                {name:"cctv2", message:"address"},
                {name:"cctv3", message:"address"},
                {name:"cctv4", message:"address"},
            ],
        };
    }

    render(){

        return(
            <View style={style.root}>
                <Text style={style.titleText}>Video_List_View</Text>

                <FlatList
                    data={this.state.datas}
                    renderItem={this.renderItem}
                    keyExtractor={ item=> item.name }>
                
                </FlatList>

            </View>
        );
    }

    renderItem=({item})=>{
        return(
            <TouchableOpacity 
                style={style.contentView} 
                onPress={()=>{alert(item.name);}}
                >

                <View style={{flexDirection:'column'}}>
                    <Text style={style.cctvName}>{item.name}</Text>
                    <Text style={style.textAddress}>{item.message}</Text>
                </View>

                <Video
                    useNativeControls
                    isLooping
                    source={{uri: url,}}
                    style={style.videoStyle}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        );
    }

}

const style= StyleSheet.create({
    root:{flex:1, padding:16,},

    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        flex: 0,
        paddingTop:30,
        paddingBottom:16,
    },

    contentView:{
        alignItems:'center',
        borderWidth:1,
        borderRadius:0,
        padding:8,
        marginBottom:12,
    },

    cctvName:{
        fontSize:24,
        fontWeight:'bold',
    },
    textAddress:{
        fontSize:16,
    },

    videoStyle: {
        alignSelf:'center',
        resizeMode:'cover',
        width: 300,
        height: 200,
    },
});
