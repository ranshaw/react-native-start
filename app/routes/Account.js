import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

import { Button } from '../public/components'

import { createAction, NavigationActions } from '../utils'
import Header from '../public/components/Header'
import bS from '../public/styles/BaseStyle'

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }
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
    const { login } = this.props
    return (
      <View style={styles.container}>
        <Header hideBack title="主页" />
        <Button
          text="Goto Detail"
          onPress={this.gotoDetail}
          type="big"
          style={bS.w_f}
        />
        {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )}
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

export default Account
