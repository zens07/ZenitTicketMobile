import React, {Component, useState} from 'react';
import {View, Text, Image, ToolbarAndroid} from 'react-native';
import {ToggleButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

function FindTicket() {
  const [showValue, setShowValue] = useState(false);
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Find Ticket</Text>
      </View>
    </>
  );
}

// const Stack = createStackNavigator();
// function FindTicket() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="FindTicket" component={FindTicketScreen} />
//     </Stack.Navigator>
//   );
// }
export default FindTicket;
