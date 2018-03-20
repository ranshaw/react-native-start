import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../components'

import { NavigationActions } from '../utils'
import Header from '../public/components/Header'

@connect()
class Detail extends Component {
  componentWillMount = options => {
    console.log(
      '传入的参数',
      options,
      this.props,
      this.props.navigation.getParam('id')
    )
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header dispatch={this.props.dispatch} title="详情页" />
        <Button text="Goto Detail" onPress={this.gotoDetail} />
        <Button text="Go Back" onPress={this.goBack} />
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
})

export default Detail
