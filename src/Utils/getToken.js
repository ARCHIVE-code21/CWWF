import firebase from 'react-native-firebase';

export default class App extends Component {

    constructor() {
        super(props);

        if (Platform.OS === 'ios') {
        PushNotificationIOS.addEventLister('register', (token) => {
            Alert.alert('PushNotificationIOS', JSON.stringify(token), [{ text: 'copy', onPress: () => Clipboard.setString(JSON.stringify(token)) }]);
        });

        PushNotificationIOS.requestPermissions();
        }

        else if (Platform.OS === 'android') {
        this.requestPermission();
        }
    }

    async requestPermission() {
        try {
        await firebase.messaging().requestPermission();
        this.getToken();
        } catch (error) {
        alert('permission rejected');
        }
    }

    async getToken() {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
        Alert.alert('fcmToken', JSON.stringify(fcmToken), [{ text: 'copy', onPress: () => Clipboard.setString(JSON.stringify(fcmToken)) }]);
        }
    }
}