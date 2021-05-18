import React, {Component} from 'react';
import { View, Text, StyleSheet, 
        FlatList, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import { Video, AVPlaybackStatus } from 'expo-av';

export default class videoList extends Component{

    constructor(){
        super();

        this.state={
            datas: [
                {
                    cctv_number : "0",
                    cctv_location : "계산오거리",
                    cctv_state : "Warning",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "1",
                    cctv_location : "감삼네거리",
                    cctv_state : "Apply",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "2",
                    cctv_location : "중앙대로",
                    cctv_state : "Apply",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "3",
                    cctv_location : "시청네거리",
                    cctv_state : "Apply",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "4",
                    cctv_location : "MBC네거리",
                    cctv_state : "Apply",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "5",
                    cctv_location : "대구공고네거리",
                    cctv_state : "Apply",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },
            ],
        };
    }

    // componentDidMount() {
        
    //     fetch('null')
    //         .then(data => data.json())
    //         .then(data => this.setState({datas: data}, () => console.log(data)))
    // }

    render(){

        return(
            <View style={style.root}>
                <Text style={style.titleText}>Video_List_View</Text>

                <FlatList
                    data={this.state.datas}
                    renderItem={this.renderItem}
                    keyExtractor={ item=> item.cctv_number }>
                
                </FlatList>

            </View>
        );
    }

    renderItem=({item})=>{
        return(
            <TouchableOpacity 
                style={style.contentView} 
                // onPress={()=>{alert(item.cctv_number);}}
                onPress={()=> this.goScreenVideo()}
                >

                <View style={{flexDirection:'column'}}>
                    <Text style={style.cctvName}>{item.cctv_number}</Text>
                    <Text style={style.textAddress}>{item.cctv_location}</Text>
                    <Text style={style.textAddress}>{item.cctv_state}</Text>
                </View>

                {/* <Video
                    useNativeControls
                    isLooping
                    source={{uri: item.cctv_url,}}
                    style={style.videoStyle}
                    resizeMode="contain"
                /> */}

            </TouchableOpacity>
        );
    }

    goScreenVideo(){
        this.props.navigation.navigate('VideoPage');
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
        flexDirection:'row',
        alignItems: 'center',
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
        resizeMode:'cover',
        flex:2,
        width: 100,
        height: 50,
    },
});
