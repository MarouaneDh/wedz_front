import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Pages/Register';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Dashboard from './Pages/Dashboard';
import OneList from './Pages/OneList';
import AddNewList from './Pages/AddNewList';

import { ToastProvider } from 'react-native-toast-notifications'

import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(null)

  const linking = {
    prefixes: ["wedz://"],
    config: {
      screens: {
        Register: "register",
      },
    },
  };

  return (
    <ToastProvider>
      <NavigationContainer linking={linking}>
        <Provider store={store}>
          {
            token ?
              <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="OneList" component={OneList} />
                <Stack.Screen name="AddNewList" component={AddNewList} />
              </Stack.Navigator> :
              <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
              </Stack.Navigator>
          }
        </Provider>
      </NavigationContainer>
    </ToastProvider>
  );
};

export default App;
