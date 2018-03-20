import React from 'react'
import { TextInput } from 'react-native'
import cS from '../styles/BaseStyle'

export const Inputs = ({ style, placeholderTextColor, noClear, ...props }) => (
  <TextInput
    style={[cS.f_1, cS.p_0, cS.p_h_15, style]}
    clearButtonMode={noClear ? 'never' : 'always'}
    placeholderTextColor={placeholderTextColor || '#999999'}
    underlineColorAndroid="transparent"
    {...props}
  />
)
export default Inputs
