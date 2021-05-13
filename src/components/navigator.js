import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/home'
//import VideoScreen from '../screens/videoList'
import InfoScreen from '../screens/info';

import videoList from './videoList'

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Video: {
            screen: videoList,
        },
        Info: {
            screen: InfoScreen,
        }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = 'ios-home';
            }else if (routeName === 'Video') {
                iconName = 'ios-videocam';
            }else if (routeName === 'Info') {
                iconName = "ios-information-circle"
            }
            return (
            <Ionicons
                name={iconName}
                size={horizontal ? 20 : 25}
                color={tintColor}
            />
            );
        },
        }),
    },
);

export default createAppContainer(TabNavigator);