import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import Storybook from './storybook';
import { name as appName } from './app.json';
LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent(appName, () => App);
