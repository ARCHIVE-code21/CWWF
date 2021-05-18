import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './src/screens/main';
import NavScreen from './src/components/navigator'
import VideoScreen from './src/screens/video'

const Route = createStackNavigator(
    {
        Main: { 
            screen: MainScreen,
            navigationOptions: {
                title: 'Main',
            }   // 메인 스택
        },

        Home: { 
            screen: NavScreen,
            navigationOptions: {
                title: 'Home',
            } // 홈 스택
        }, 
        
        VideoPage: {
            screen: VideoScreen,
            navigationOptions: {
                title: 'VideoPage',
            } // 비디오 스택
        }
    },
    { initialRouteName: "Main", headerMode: "none"}
    // 시작페이지 지정 => Main

);

const App = createAppContainer(Route);

export default App;

// createStackNavigator 페이지를 Stack에 쌓아두어 이동하는 방법
// 이전의 페이지를 그대로 유지할 수 있는 장점이 있지만 페이지 이동할떄 reloading 안됨