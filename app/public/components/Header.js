import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Input from './Input'
import cS from '../styles/BaseStyle'
import styles from '../styles/headerStyle'
import iconMap from '../styles/icon'

const Header = ({
  getRef, // 头ref
  headerStyle,
  type, // 头类型，search为搜索头
  dispatch, // 用来返回事件
  title, // 头标题
  titleIcon, // 头标题图标
  titleFun, // 头标题点击事件
  hideBack, // 隐藏返回按钮
  leftFun, // 左按钮事件
  leftIcon, // 左按钮图标
  leftText, // 左按钮文字，注：如果图标文字同时有，上下排列
  rightFun, // 右按钮事件
  rightIcon, // 右按钮图标
  rightText, // 右按钮文字，注：如果图标文字同时有，上下排列
  rightTwoFun, // 右二按钮事件
  rightTwoIcon, // 右二按钮图标
  rightTwoText, // 右二按钮文字，注：如果图标文字同时有，上下排列
  onBack,
  ...props // 搜索Input其他属性
}) => {
  if (type === 'search') {
    return (
      <View style={[cS.f_r_s_c, cS.b_blue, styles.header]}>
        <View style={[cS.f_r_s_c, cS.f_1, styles.input]}>
          <Text style={[cS.icon, cS.c_white, styles.icon]}>
            {iconMap.map.icon_iconfontzhizuobiaozhun22}
          </Text>
          <Input
            style={[cS.c_white, cS.p_h_0]}
            placeholderTextColor="rgba(255,255,255,0.5)"
            {...props}
          />
        </View>
        {textBtn(() => {
          dispatch(NavigationActions.back())
        }, '取消')}
      </View>
    )
  }
  return (
    <View
      ref={getRef ? header => getRef(header) : null}
      style={[cS.f_r_c, cS.b_blue, styles.header, headerStyle]}
    >
      {titleFun ? (
        titleBtn(titleFun, title, titleIcon)
      ) : (
        <Text style={[cS.c_white, styles.text]}>{title}</Text>
      )}
      <View style={[cS.f_r_s_c, styles.left]}>
        {hideBack
          ? null
          : iconBtn(
              () => {
                dispatch(NavigationActions.back())
              },
              iconMap.map.icon_fanhui1,
              onBack
            )}
        {leftIcon && !leftText ? iconBtn(leftFun, leftIcon) : null}
        {!leftIcon && leftText ? textBtn(leftFun, leftText) : null}
        {leftIcon && leftText ? iconTextBtn(leftFun, leftIcon, leftText) : null}
      </View>
      <View style={[cS.f_r_s_c, styles.right]}>
        {rightIcon && !rightText ? iconBtn(rightFun, rightIcon) : null}
        {!rightIcon && rightText ? textBtn(rightFun, rightText) : null}
        {rightIcon && rightText
          ? iconTextBtn(rightFun, rightIcon, rightText)
          : null}
        {rightTwoIcon && !rightTwoText
          ? iconBtn(rightTwoFun, rightTwoIcon)
          : null}
        {!rightTwoIcon && rightTwoText
          ? textBtn(rightTwoFun, rightTwoText)
          : null}
        {rightTwoIcon && rightTwoText
          ? iconTextBtn(rightTwoFun, rightTwoIcon, rightTwoText)
          : null}
      </View>
    </View>
  )
}

const titleBtn = (onPress, text, icon) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <View style={[cS.f_r_c]}>
      <Text style={[cS.c_white, styles.text]}>{text}</Text>
      <Text style={[cS.icon, cS.c_white, styles.titleIcon]}>{icon}</Text>
    </View>
  </TouchableOpacity>
)

const iconBtn = (onPress, icon, onBack) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      if (!onBack) {
        onPress()
      }
    }}
  >
    <Text style={[cS.icon, cS.c_white, styles.icon]}>{icon}</Text>
  </TouchableOpacity>
)
const textBtn = (onPress, text) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    <Text style={[cS.c_white, styles.btnText]}>{text}</Text>
  </TouchableOpacity>
)
const iconTextBtn = (onPress, icon, text) => (
  <TouchableOpacity
    style={[cS.f_c, styles.iconTextBtn]}
    activeOpacity={0.8}
    onPress={onPress}
  >
    <Text style={[cS.icon, cS.c_white, styles.iconTop]}>{icon}</Text>
    <Text style={[cS.c_white, styles.btnTextBottom]}>{text}</Text>
  </TouchableOpacity>
)

export default Header
