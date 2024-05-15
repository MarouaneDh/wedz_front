import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from './Pages/Register';
import Settings from './Pages/Settings';
import Dashboard from './Pages/Dashboard';
import OneList from './Pages/OneList';

import { ToastProvider } from 'react-native-toast-notifications'

import { StyleSheet } from 'react-native';
import AddNewList from './Pages/AddNewList';

const Stack = createNativeStackNavigator();

const App = () => {
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
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="OneList" component={OneList} />
          <Stack.Screen name="AddNewList" component={AddNewList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
