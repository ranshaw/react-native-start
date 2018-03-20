import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import cS from '../styles/BaseStyle'

const btn = [cS.b_r_3, cS.b_blue, cS.h_30, cS.p_h_15]
const btnText = [cS.c_white, cS.f_13]
const small = [cS.b_blue, cS.b_r_2, cS.h_20, cS.p_h_5]
const small1 = [cS.b_blue, cS.b_r_2, cS.h_20, cS.p_h_5]
const smallText = [cS.c_white, cS.f_12]
const tSmall = [cS.b_c_blue, cS.b_r_3, cS.h_30, cS.p_h_15]
const tSmallText = [cS.c_blue, cS.f_13]
const tSmallG = [cS.b_c_dgray, cS.b_r_3, cS.h_30]
const tSmallTextG = [cS.c_gray, cS.f_13]
const tSmallN = [cS.b_l_black, cS.b_r_3, cS.h_30, cS.w_120]
const Big = [cS.b_r_5, cS.b_blue, cS.h_50]
const BigText = [cS.c_white, cS.f_18]
const Button = ({ text, style, textStyle, type, ...props }) => (
  <TouchableOpacity
    style={[
      cS.f_r_c,
      type === 'small'
        ? small
        : type === 'small1'
          ? small1
          : type === 't_small'
            ? tSmall
            : type === 't_smallg'
              ? tSmallG
              : type === 't_smalln' ? tSmallN : type === 'big' ? Big : btn,
      style,
    ]}
    activeOpacity={0.8}
    {...props}
  >
    <Text
      style={[
        type === 'small'
          ? smallText
          : type === 't_small'
            ? tSmallText
            : type === 't_smallg'
              ? tSmallTextG
              : type === 'big' ? BigText : btnText,
        textStyle,
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
)

export default Button
