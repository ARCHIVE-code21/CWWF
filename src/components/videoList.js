import React, {Component} from 'react';
import { View, Text, StyleSheet, 
    FlatList, TouchableOpacity} from 'react-native';

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
                datas: [
                    {
                        //Sample datas
                        "cctv_number" : "number",
                        "cctv_location" : "location",
                        "cctv_state" : "apply",
                        "cctv_url" : "null"
                    }
                ],
                
                isLoading: false,
            };
    }

    // Request
    // GET http://localhost:3000/datalist
    // Origin: http://localhost:3000

    componentDidMount() {
        this.setState({ isLoading: true});

        fetch('http://localhost:3000/datalist' ,  {
            mode: 'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(console.log("componentDidMount run..."))
        .then((res) => res.json())
        .then((res) => this.setState({ datas: res, isLoading: false }, 
            () => console.log(res)))
    }

    render(){
        const { datas, isLoading } = this.state;
        
        if (isLoading) {
            return <View>
                <Text> LOADING ...</Text>
            </View>
        }
        return( // Screen
            <View style={style.root}>
                <Text style={style.titleText}>Video_List_View</Text>

                <FlatList
                    data={this.state.datas} // datas
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
