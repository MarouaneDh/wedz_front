import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Pages/Register';
import { StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications'

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
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={Register} />
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
