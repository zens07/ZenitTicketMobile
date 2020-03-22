/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import {withTheme} from 'react-native-paper';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import TicketUserScreen from '../screens/TicketUserScreen';
import SavingTicketScreen from '../screens/SavingTicket';
import UserScreen from '../screens/UserScreen';
import FindTicket from '../components/FindTicket';

const TabNav = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

function Index() {
  return (
    <TabNav.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'MyTickets') {
            iconName = focused ? 'ticket-alt' : 'ticket-alt';
          } else if (route.name === 'SavingTicket') {
            iconName = focused ? 'list-alt' : 'list-alt';
          } else if (route.name === 'MyAccount') {
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
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="SavingTicket" component={SavingTicketScreen} />
      <TabNav.Screen name="MyTickets" component={TicketUserScreen} />
      <TabNav.Screen name="MyAccount" component={UserScreen} />
    </TabNav.Navigator>
  );
}

export default withTheme(Index);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
