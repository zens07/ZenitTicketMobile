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

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {withTheme} from 'react-native-paper';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import TicketUserScreen from './TicketUserScreen';
import SavingTicketScreen from './SavingTicket';
import UserScreen from './UserScreen';
import DrawerContent from '../components/DrawerContent';
import MainScreen from './MainScreen';
import LoginScreen from '../components/LoginScreen';
// import Header from '../components/header';
// import FindTicket from '../components/FindTicket';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

// const Drawer = createDrawerNavigator();
// function ProfileDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={() => <DrawerContent />}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// }
// HeaderScreen = ({navigation}) =>{

// }
const TabNav = createBottomTabNavigator();
function IndexBottomNav() {
  return (
    <TabNav.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Tickets') {
            iconName = focused ? 'ticket-alt' : 'ticket-alt';
            // } else if (route.name === 'Orders') {
            //   iconName = focused ? 'list-alt' : 'list-alt';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle' : 'user-circle';
          }
          // You can return any component that you like here!
          return <AwesomeIcon name={iconName} size={20} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0097e6',
        inactiveTintColor: '#2f3640',
      }}>
      <TabNav.Screen name="Home" component={HomeScreen} />
      {/* <TabNav.Screen name="Orders" component={SavingTicketScreen} /> */}
      <TabNav.Screen name="Tickets" component={TicketUserScreen} />
      <TabNav.Screen name="Profile" component={UserScreen} />
    </TabNav.Navigator>
  );
}

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
            <>
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen
                name="Login"
                component={() => <LoginScreen showIndex={ShowIndex} />}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Index" component={IndexBottomNav} />
              <Stack.Screen name="Orders" component={SavingTicketScreen} />
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
