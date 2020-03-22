/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import DragDropScreen from './src/DragAndDrop';
// import Sortable from './src/Sortable';
// import Drag1 from './src/Drag1';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DragDropScreen);
