/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {withTheme, Appbar, Drawer} from 'react-native-paper';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import Index from './src/screens/Index';
// import {ProfileDrawer} from './src/navigations/ProfileDrawer';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const IndexStack = createStackNavigator();

// function IndexStack() {
//   return(

//     <TabNav.Screen name="HomeScreen" component={HomeScreen} />
//       <TabNav.Screen name="SavingTicket" component={SavingTicketScreen} />
//       <TabNav.Screen name="MyTickets" component={TicketUserScreen} />
//       <TabNav.Screen name="MyAccount" component={UserScreen} />
//   )
// }

const Stack = createStackNavigator();
function App() {
  const [showIndex, setShowIndex] = useState(false);

  const ShowIndex = () => {
    setShowIndex(true);
  };
  console.log(showIndex);
  return (
    <PaperProvider
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}
      theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Apps"
          screenOptions={{
            headerShown: false,
          }}>
          {!showIndex ? (
            <Stack.Screen
              name="MainScreen"
              component={() => <MainScreen ShowIndex={ShowIndex} />}
            />
          ) : (
            <>
              <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default withTheme(App);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
