import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  TouchableRipple,
  IconButton,
  TextInput,
  Avatar,
  DefaultTheme,
  withTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const theme = {
  colors: {
    placeholder: 'white',
    text: 'white',
    primary: 'white',
    underlineColor: 'transparent',
    background: '#003489',
  },
};

function LoginScreen(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  return (
    <>
      <ImageBackground
        source={require('../../public/assets/images/background-login.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.itemLogin}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Avatar.Image
                size={120}
                source={require('../../public/assets/images/logo.png')}
              />
            </View>
          </View>
          <View style={styles.itemLogin}>
            <View
              style={{
                flex: 1,
                height: 150,
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={styles.textInput}
                theme={theme}
                mode="flat"
                label="Email"
                caretHidden={true}
                underlineColor="white"
                value={state.email}
                onChangeText={email => setState(email)}
              />
              <TextInput
                style={styles.textInput}
                theme={theme}
                underlineColor="white"
                mode="flat"
                label="Password"
                secureTextEntry={true}
                value={state.password}
                onChangeText={password => setState(password)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => props.showIndex()}>
                <Text style={{fontSize: 20}}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
export default withTheme(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:
    //   'linear-gradient(0deg, rgba(52,48,117,1) 0%, rgba(0,0,232,1) 50%, rgba(58,222,255,1) 100%)',
  },
  item: {
    flex: 1,
  },
  itemLogin: {
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    backgroundColor: 'transparent',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    height: 60,
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdc3c7',
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 10,
  },
});
