import * as React from 'react';
// import MainNav from './src/navigation/index';
import {Provider} from './src/context/TodoContext';
import MainNav from './src/navigation/MainNav';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Admob from './src/screens/Admob';
import Loading from './src/screens/Loading';

console.disableYellowBox = true;

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        {/* <Admob /> */}
        {/* <Loading /> */}
        <MainNav />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
