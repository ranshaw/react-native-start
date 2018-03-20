import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../public/components'
import { NavigationActions } from '../utils'
import bS from '../public/styles/BaseStyle'
import Header from '../public/components/Header'

@connect()
class Home extends Component {
  // static navigationOptions = {
  //   header: null,
  //   tabBarLabel: 'Home',
  //   tabBarIcon: ({ focused, tintColor }) => (
  //     <Image
  //       style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
  //       source={require('../assets/images/house.png')}
  //     />
  //   ),
  // }

  gotoDetail = () => {
    this.props.dispatch(
      NavigationActions.navigate({
        routeName: 'Detail',
        params: {
          id: '22222',
          name: '我们',
        },
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Header hideBack title="主页" />
        <Button
          text="Goto Detail"
          onPress={this.gotoDetail}
          type="big"
          style={bS.w_f}
        />
        <Button text="testStyles" style={bS.w_310} />
        <Button
          text="testStyles222"
          style={{ width: 155 }}
          textStyle={{ fontSize: 15 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
