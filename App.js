import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation'
class App extends Component {
    render () {
        return(
            <View>
                <Text>App</Text>
            </View>
        );
    }
}

Navigation.registerComponent('AppScreen', () => App);

const startApp = () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'AppScreen',
            title: 'App',
        },
    });
};

Navigation.isAppLaunched()
    .then((appLaunched) => {
        if (appLaunched) {
            startApp();
        }
        new NativeEventsReceiver().appLaunched(startApp);
    });