import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import BottomTabs from './BottomTab';
import CreateTodo from '../screens/CreateTodo';
// import EditTodo from '../screens/EditTodo';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const MainNav = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
        // mode={'card'}
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}
        initialRouteName="BottomTabs"
        headerMode={'none'}
        // options={{ headerShown: false }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
        {/* <Stack.Screen name="EditTodo" component={EditTodo} /> */}
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default MainNav;
