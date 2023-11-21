import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LayoutHome} from './src/component/screen01/LayoutHome';
import { Todolist } from './src/component/screen02/Todolist';
import { AddTodo } from './src/component/screen03/AddTodo';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

export default function App() {
  const Stack = createStackNavigator();
  return (
   <Provider store={store}>
     <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={LayoutHome} options={{headerShown:false}}/>
        <Stack.Screen name='todolist' component={Todolist}/>
        <Stack.Screen name='add' component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}
