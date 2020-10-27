import { registerRootComponent } from 'expo';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
preventAutoHideAsync();
hideAsync();
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
