import BG from 'react-native-background-geolocation';

const BackgroundGeolocationTask = async (event) => {
    switch (event.name) {
        case 'location':
            break;
        case 'schedule':
            break;
        default:
            break;
    }
};

BG.registerHeadlessTask(event => BackgroundGeolocationTask(event));