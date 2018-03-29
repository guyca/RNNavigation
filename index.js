import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigation, NativeEventsReceiver } from 'react-native-navigation'
import BG from 'react-native-background-geolocation';

class App extends Component {
    componentDidMount() {
        BG.ready({
            foregroundService: true,
            notificationTitle: 'Title',
            notificationText: 'Mesage',
            notificationPriority: BG.NOTIFICATION_PRIORITY_MAX,
            desiredAccuracy: BG.DESIRED_ACCURACY_HIGH,
            distanceFilter: 20,
            elasticityMultiplier: 3,
            stopOnTerminate: false,
            startOnBoot: true,
            forceReloadOnSchedule: false,
            forceReloadOnBoot: true,
            batchSync: true,
            autoSync: true,
            autoSyncThreshold: 20,
            enableHeadless: true,
            logMaxDays: 7,
            schedule: ['1-7 08:00-20:00']
        }, () => {
            BG.start();
        });
    }
    render () {
        return(
            <View>
                <Text>Headless Task</Text>
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
        animationType: 'fade',
    });
};

Navigation.isAppLaunched()
    .then((appLaunched) => {
        if (appLaunched) {
            startApp();
        }
        new NativeEventsReceiver().appLaunched(startApp);
    });