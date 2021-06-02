import React, {Component} from 'react';
import { View, Text, StyleSheet, 
    FlatList, TouchableOpacity, ScrollView} from 'react-native';

import cctvData from './cctv.json'

import PropTypes from 'prop-types';

    // export default function App() {
    //     const [data, setData] = useState([]);
    
    //     const getData = () => {
    //         fetch('http://localhost:3000/datalist')
    //             .then((data) => data.json())
    //             .then((data) => setData({
    //                 datas: data
    //             }))
    //     }
    // }

export default class videoList extends Component{

    constructor(props){ // class 내에서 객체 생성 하고 초기화 ( 생성자 )
        super(props); // 상위 클래스의 생성자를 호출하고 반환
        //생성자 메소드로 컴포넌트가 생성될 때 단 한번만 실행된다.
        //이 메소드에서만 state를 설정 가능
            this.state={
                fetch_datas: [//Sample datas
                    {
                        // "cctv_number" : "number",
                        // "cctv_location" : "location",
                        // "cctv_state" : "apply",
                        // "cctv_url" : "null"
                    }
                ],

                cctv_datas: cctvData,
                
                isLoading: false,
                isFetching: false
            };
    }

    // Request
    // GET http://localhost:3000/datalist
    // Origin: http://localhost:3000

    componentDidMount() {
        this.setState({ isLoading: true});

        let url = "http://172.16.138.69:3000/datalist"
        var sortNum = "cctv_number"

        this.state.fetch_datas.sort(function(a, b) {
            return a[sortNum] - b[sortNum];
        })

            fetch( url ,  {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                // body: JSON.stringify({offset: 1, limlt: 2})
            })
            
            .then(console.log("get fetch_datas run..."))
            .then(res => {
                console.log(res);
                return res.json()})
            .then(res => this.setState({ fetch_datas: res, isLoading: false }, 
                () => console.log(res, 'data Success')))
            .catch(err => { console.log('DATA GET ERROR',{ err })})
        }

        onRefresh() {
            console.log('refreshing')
            this.setState({ isFetching: true }, function(){
                this.fetchData()
            });
        }

        fetchData() {
            alert('refreshing data');
        }
        

    render(){
        const { fetch_datas, isLoading } = this.state;
        
        if (isLoading) {
            return <View>
                <Text style={style.Loading}> CCTV_VIDEO_LOADING ...</Text>
            </View>
        }

        return( // Screen
            <ScrollView>
                <View style={style.root}>
                    <Text style={style.titleText}>Video_List_View</Text>
                    <FlatList
                        data={this.state.fetch_datas} // fetch_datas
                        renderItem={this.renderItem}
                        keyExtractor={ item=> item.cctv_number }
                        onRefresh={() => this.onRefresh}
                        refreshing={this.state.isFetching}
                        />

                </View>

                <View style={style.root}>
                    <FlatList
                        data={this.state.cctv_datas}
                        renderItem={this.renderItem}
                        keyExtractor={ item=> item.cctv_number }
                        />    
                </View>

            </ScrollView>
        );
    }

    renderItem=({item})=>{ //item

        console.log(item);

        return(
            <TouchableOpacity 
                style={style.contentView} 
                // onPress={()=>{alert(item.cctv_number);}}
                onPress={()=> this.goScreenVideo(item)}
                >

                <View style={{flexDirection:'column'}}>
                    <Text style={style.cctvName}>{item.cctv_number}</Text>
                    <Text style={style.textAddress}>{item.cctv_location}</Text>
                    <Text style={style.textWarring}>{item.cctv_state}</Text>
                    <Text style={style.textApply}>{item.cctv_apply}</Text>
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

        goScreenVideo(item){
            this.props.navigation.navigate('VideoPage', {item: item});
        }
    }

    videoList.propTypes = {
        cctv_url: PropTypes.string.isRequired
    };

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

textApply:{
    color: 'green'
},  

textWarring:{
    color: 'red'
},

videoStyle: {
    resizeMode:'cover',
    flex:2,
    width: 100,
    height: 50,
},

Loading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 300
},
container: {
    flex: 1,
    },
    scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
