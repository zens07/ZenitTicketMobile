import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {TouchableRipple, IconButton, Button, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

function MainScreen({navigation}) {
  return (
    <>
      <ImageBackground
        source={require('../../public/assets/images/background-login.png')}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <Avatar.Image
              size={180}
              source={require('../../public/assets/images/logo.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#bdc3c7',
                width: 180,
                borderRadius: 15,
                padding: 10,
                flexDirection: 'row',
              }}
              onPress={() => navigation.navigate('Login')}>
              <Text style={{fontSize: 20}}>Go To Apps</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
export default MainScreen;
