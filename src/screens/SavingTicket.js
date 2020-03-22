import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Checkbox, withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {Headers} from '../components/header';

function SavingTicketScreen({navigation}) {
  const [state, setState] = useState({
    checked: false,
    qty: 1,
    voucherCode: '',
  });
  const handlePress = (checked, qty) => {
    if (qty != 0 && qty <= 4) {
      setState({
        checked: checked,
        qty: qty,
      });
    } else {
      console.log('limited Quatity');
    }
  };
  // console.log(state);
  const theme = {
    TextInput: {
      padding: 0,
      marginVertical: 0,
    },
  };
  return (
    <>
      <View style={styles.container}>
        <Headers title="KeranjangSaya" pop={navigation.pop} />
        <View style={styles.itemOne}>
          <ScrollView>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.checkbox}>
                <Checkbox
                  status={state.checked ? 'checked' : 'unchecked'}
                  onPress={() => handlePress(!state.checked, state.qty)}
                />
              </View>
              <View style={styles.contentCardOne}>
                <Text style={styles.textTitle}>Juramangu Express</Text>
                <Text style={styles.textClass}>Class : Bisnis</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.information}>
                    <Text style={styles.textHarga}>Rp. 20.000</Text>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty + 1)
                        }>
                        <Icon name="plus" size={15} />
                      </TouchableOpacity>
                      <TextInput
                        style={styles.textInput}
                        editable={false}
                        selectTextOnFocus={false}
                        placeholder={`${state.qty}`}
                        value={state.qty}
                      />
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          handlePress(state.checked, state.qty - 1)
                        }>
                        <Icon name="minus" size={15} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.information}>
                    <Text>From : Juramangu</Text>
                    <Text>To : Bekasi</Text>
                    <Text>Date : 2019-02-20</Text>
                    <Text>Time : 07:00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.itemTwo}>
          <View style={styles.cardTwo}>
            <View
              style={{flexGrow: 1, flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="coins" size={20} color="#e1b12c" />
              <Text style={{marginLeft: 5, fontSize: 15, fontWeight: 'bold'}}>
                Voucher
              </Text>
              <TextInput
                style={{
                  borderWidth: 0.5,
                  width: '65%',
                  marginHorizontal: 2,
                  padding: 8,
                  borderRadius: 30,
                  backgroundColor: '#dcdde1',
                }}
                value={state.codeVoucher}
                placeholder="Gunakan/masukkan kode"
              />
              <Icon
                name="chevron-right"
                size={25}
                style={{margin: 0, textAlign: 'right', color: '#95a5a6'}}
              />
            </View>
            <View
              style={{
                flexGrow: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  marginRight: 5,
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Checkbox
                    status={state.checked ? 'checked' : 'unchecked'}
                    onPress={() => handlePress(!state.checked, state.qty)}
                  />
                  <Text>Select All</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{marginLeft: 5}}>SubTotal : </Text>
                  <Text
                    style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}>
                    Rp. 25000
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#d35400',
                      fontWeight: 'bold',
                    }}>
                    Poin Anda 20 poin
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 5,
                    padding: 10,
                    backgroundColor: '#0652DD',
                    borderRadius: 5,
                  }}>
                  <Text>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
export default withTheme(SavingTicketScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  itemOne: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    backgroundColor: '#dcdde1',
  },
  card: {
    flexGrow: 1,
    padding: 10,
    marginTop: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  cardTwo: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  itemTwo: {
    flex: 1,
    padding: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    backgroundColor: '#dcdde1',
  },
  checkbox: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentCardOne: {
    flex: 6,
    flexDirection: 'column',
  },
  information: {
    flex: 1,
    flexDirection: 'column',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textClass: {
    fontSize: 12,
  },
  textQty: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  textHarga: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
    // marginTop: 10,
    marginVertical: 10,
  },
  textInput: {
    height: 30,
    width: 50,
    borderWidth: 0.5,
    backgroundColor: '#f5f6fa',
    padding: 0,
    marginVertical: 0,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: '#95a5a6',
    textAlign: 'center',
  },
  button: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdde1',
    borderWidth: 0.5,
    borderColor: '#95a5a6',
  },
});
