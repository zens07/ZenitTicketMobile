import React, {Component} from 'react';
import {
  Appbar,
  Searchbar,
  Portal,
  Modal,
  Button,
  Badge,
} from 'react-native-paper';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstQuery: '',
      searchBar: false,
      showMore: false,
    };
  }

  _handleSearch = () => {
    this.setState({
      searchBar: !this.state.searchBar,
    });
  };

  _handleMore = () => {
    this.setState({
      showMore: !this.state.showMore,
    });
    console.log('Shown more');
  };
  render() {
    const {firstQuery, searchBar, showMore} = this.state;
    const {push} = this.props;
    return (
      <>
        {/* <View style={styles.overlay}></View> */}
        <Appbar.Header style={{flexDirection: 'row'}}>
          {searchBar ? (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Searchbar
                placeholder="Search"
                onChangeText={query => {
                  this.setState({firstQuery: query});
                }}
                value={firstQuery}
                clearIcon="times-circle"
                icon={() => {
                  return <Icon name="arrow-left" size={15} />;
                }}
                onIconPress={this._handleSearch}
              />
            </View>
          ) : null}
          {!searchBar ? (
            <View
              style={{
                flexDirection: 'row',
                position: 'relative',
                marginRight: 15,
                alignItems: 'center',
              }}>
              <Appbar.Content title="LandTick" />
              <Appbar.Action
                icon="search"
                size={20}
                color="white"
                onPress={this._handleSearch}
              />
              <Appbar.Action
                icon={() => {
                  return (
                    <>
                      <TouchableOpacity onPress={() => push('Orders')}>
                        <Icon name="shopping-cart" size={20} color="white" />
                      </TouchableOpacity>
                    </>
                  );
                }}
              />
              <Badge style={{position: 'absolute', right: 0, top: 0}} size={20}>
                3
              </Badge>
            </View>
          ) : null}
        </Appbar.Header>
      </>
    );
  }
}
export class Headers extends Component {
  render() {
    const {title, pop} = this.props;
    return (
      <>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => pop()} />
          <Appbar.Content title={title} />
          {/* {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} /> */}
          {/* <Appbar.Action icon="camera" onPress={this._handleMore} /> */}
        </Appbar.Header>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  items: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  itemModal: {
    flexDirection: 'row',
  },
  iconCustom: {
    fontSize: 25,
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,0,0,0.2)',
  },
});
