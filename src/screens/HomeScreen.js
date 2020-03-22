import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {
  withTheme,
  Appbar,
  Card,
  Title,
  TextInput,
  Paragraph,
  Avatar,
  Badge,
  TouchableRipple,
} from 'react-native-paper';

import {HomeHeader} from '../components/header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({navigation}) {
  console.log(navigation);
  const [bgColor, setBgColor] = useState(['red', 'yellow', 'green']);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    getRandomColor();
  });
  const getRandomColor = () => {
    const item = bgColor[Math.floor(Math.random() * bgColor.length)];
    setSelectedColor(item);
  };
  // console.log(navigathtion);
  // console.log('item', selectedColor);
  return (
    <>
      <StatusBar backgroundColor="#2980b9" barStyle="light-content" />
      <HomeHeader push={navigation.push} />
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              backgroundColor: 'white',
              paddingHorizontal: 15,
              paddingVertical: 25,
            }}>
            <View
              style={{
                flex: 3,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableRipple
                // onPress={}
                rippleColor="rgba(0, 0, 0, 0)">
                <Avatar.Image
                  size={45}
                  source={require('../../public/assets/images/train.jpg')}
                />
              </TouchableRipple>
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={{fontSize: 17, paddingLeft: 10}}>
                    Risa Risnawati
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Badge style={{backgroundColor: '#d1cebd', fontSize: 12}}>
                    <Icon name="coins" /> Point <Icon name="caret-right" />
                  </Badge>
                  <Badge style={{backgroundColor: '#d1cebd', fontSize: 12}}>
                    <Icon name="money-bill-wave" /> Dompet{' '}
                    <Icon name="caret-right" />
                  </Badge>
                  <Badge style={{backgroundColor: '#d1cebd', fontSize: 12}}>
                    <Icon name="dollar-sign" /> Payment{' '}
                    <Icon name="caret-right" />
                  </Badge>
                </View>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Icon name="cog" size={20} />
            </View>
          </View>
          <View style={styles.viewIcon}>
            <View style={styles.itemIcon}>
              <TouchableRipple
                onPress={() => console.log('Pressed')}
                rippleColor="rgba(0, 0, 0, .32)">
                <Avatar.Icon
                  size={45}
                  icon={() => (
                    <AwesomeIcon name="plane" color="white" size={28} />
                  )}
                  style={{backgroundColor: '#e67e22'}}
                />
              </TouchableRipple>
              <Text style={styles.textIcon}>Pesawat</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <Icon name="train" size={22} color="white" />
                )}
                style={{backgroundColor: '#e74c3c'}}
              />
              <Text style={styles.textIcon}>Train</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={() => <Icon name="building" color="white" size={22} />}
                style={{backgroundColor: '#8e44ad'}}
              />
              <Text style={styles.textIcon}>Hotel</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <Icon name="bus-alt" color="white" size={22} />
                )}
                style={{backgroundColor: '#f1c40f'}}
              />
              <Text style={styles.textIcon}>Bus</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <Icon name="mobile-alt" color="white" size={22} />
                )}
                style={{backgroundColor: '#27ae60'}}
              />
              <Text style={styles.textIcon}>Pulsa</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <AwesomeIcon name="car" color="white" size={28} />
                )}
                style={{backgroundColor: '#40739e'}}
              />
              <Text style={{fontSize: 12, textAlign: 'center'}}>
                Rental Mobil
              </Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <Icon name="lightbulb" size={22} color="white" />
                )}
                style={{backgroundColor: '#d35400'}}
              />
              <Text style={styles.textIcon}>Listrik</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={() => <Icon name="ship" color="white" size={22} />}
                style={{backgroundColor: '#e74c3c'}}
              />
              <Text style={styles.textIcon}>Ship</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <Icon name="credit-card" color="white" size={22} />
                )}
                style={{backgroundColor: '#192a56'}}
              />
              <Text style={styles.textIcon}>Tagihan Belanja</Text>
            </View>
            <View style={styles.itemIcon}>
              <Avatar.Icon
                size={45}
                icon={({size, color}) => (
                  <Icon name="taxi" color="white" size={22} />
                )}
                style={{backgroundColor: '#f39c12'}}
              />
              <Text style={styles.textIcon}>Taxi</Text>
            </View>
          </View>
          <View style={styles.viewFitur}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flex: 1, marginLeft: 10}}>
                <Title>LandTick</Title>
                <Paragraph style={{fontSize: 12}}>
                  Dapatkan info terbaru mengenai fitur terbaru kami
                </Paragraph>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Card style={styles.itemFitur}>
                    <Card.Cover
                      style={styles.imageFitur}
                      source={{uri: 'https://picsum.photos/700'}}
                    />
                    <Card.Content style={{paddingLeft: 10}}>
                      <Title>Penambahan Pembelian </Title>
                      <Paragraph>Card content</Paragraph>
                    </Card.Content>
                  </Card>
                  <Card style={styles.itemFitur}>
                    <Card.Cover
                      style={styles.imageFitur}
                      source={{uri: 'https://picsum.photos/700'}}
                    />
                    <Card.Content style={{paddingLeft: 10}}>
                      <Title>Penambahan Pembelian </Title>
                      <Paragraph>Card content</Paragraph>
                    </Card.Content>
                  </Card>
                </ScrollView>
              </View>
            </View>
            {/* </View> */}
          </View>
          <View style={styles.viewToday}>
            <Card style={styles.itemToday}>
              <View style={{flexDirection: 'column'}}>
                <Card.Content style={{paddingBottom: 10, paddingLeft: 10}}>
                  <Title>Ongoing Today</Title>
                </Card.Content>
                <View style={{flexDirection: 'row'}}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Card.Cover
                      style={styles.imageToday}
                      source={require('../../public/assets/today/1.png')}
                    />
                    <Card.Cover
                      style={styles.imageToday}
                      source={require('../../public/assets/today/2.png')}
                    />
                    <Card.Cover
                      style={styles.imageToday}
                      source={require('../../public/assets/today/3.png')}
                    />
                    <Card.Cover
                      style={styles.imageToday}
                      source={require('../../public/assets/today/4.png')}
                    />
                    <Card.Cover
                      style={styles.imageToday}
                      source={require('../../public/assets/today/5.png')}
                    />
                  </ScrollView>
                </View>
              </View>
            </Card>
          </View>

          <View style={styles.viewFitur}>
            <View style={{flexDirection: 'column'}}>
              <View style={{flex: 1, marginLeft: 10}}>
                <Title>Berita Penting</Title>
                <Paragraph style={{fontSize: 12}}>
                  yang anda harus ketahui
                </Paragraph>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Card style={styles.itemFitur}>
                    <Card.Cover
                      style={styles.imageFitur}
                      source={{uri: 'https://picsum.photos/700'}}
                    />
                    <Card.Content
                      style={{
                        width: 280,
                        paddingLeft: 10,
                      }}>
                      <Text style={{textAlign: 'justify'}}>
                        Berita terbaru mengenai virus corona covid 19 yang
                        dikonfirmasi diindonesia sebanyak 117 orang
                      </Text>
                    </Card.Content>
                  </Card>
                  <Card style={styles.itemFitur}>
                    <Card.Cover
                      style={styles.imageFitur}
                      source={{uri: 'https://picsum.photos/700'}}
                    />
                    <Card.Content
                      style={{
                        width: 280,
                        paddingLeft: 10,
                      }}>
                      <Paragraph style={{textAlign: 'justify'}}>
                        Pengguna TikTok di Indonesia semakin meningkat terutama
                        generasi muda yang lahir pada tahun 2000
                      </Paragraph>
                    </Card.Content>
                  </Card>
                </ScrollView>
              </View>
            </View>
          </View>

          <View style={styles.viewFitur}>
            <View style={{flex: 1, height: 200}}></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default withTheme(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  items: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageHeader: {
    height: '30%',
  },
  viewIcon: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: 'white',
  },
  itemIcon: {
    height: 60,
    width: 60,
    marginTop: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 12,
    textAlign: 'center',
  },
  viewToday: {
    padding: 10,
    backgroundColor: 'white',
  },
  itemToday: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageToday: {
    width: 200,
    height: 150,
    flex: 1,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 5,
    borderColor: '#718093',
    borderWidth: 2,
  },

  viewFitur: {
    padding: 10,
    marginTop: 5,
    backgroundColor: 'white',
  },
  itemFitur: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageFitur: {
    width: 250,
    height: 150,
    marginLeft: 10,
    resizeMode: 'contain',
    borderRadius: 5,
    borderColor: '#718093',
    borderWidth: 2,
  },
});
