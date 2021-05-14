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
                    cctv_number : "e3",
                    cctv_location : "감삼네거리",
                    cctv_state : "warning",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "e4",
                    cctv_location : "감삼네거리",
                    cctv_state : "warning",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "e4",
                    cctv_location : "감삼네거리",
                    cctv_state : "warning",
                    cctv_url : "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                },

                {
                    cctv_number : "e4",
                    cctv_location : "감삼네거리",
                    cctv_state : "warning",
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
                onPress={()=>{alert(item.cctv_number);}}
                >

                <View style={{flexDirection:'column'}}>
                    <Text style={style.cctvName}>{item.cctv_number}</Text>
                    <Text style={style.textAddress}>{item.cctv_location}</Text>
                    <Text style={style.textAddress}>{item.cctv_state}</Text>
                </View>

                <Video
                    useNativeControls
                    isLooping
                    source={{uri: item.cctv_url,}}
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
