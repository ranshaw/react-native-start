import { StyleSheet } from 'react-native'
import {
  setSpText,
  scaleSize,
  isIphoneX,
  width,
  height,
} from '../../utils/screenUtil'

console.log('屏幕宽度11', width, scaleSize(340))

const BaseStyle = StyleSheet.create({
  /*
  scrollView
  */
  scrollView: {
    marginTop: isIphoneX ? 88 : 64,
  },
  /*
  position
  */
  p_a: {
    position: 'absolute',
  },
  t_0: {
    top: 0,
  },
  l_0: {
    left: 0,
  },
  r_0: {
    right: 0,
  },
  b_0: {
    bottom: 0,
  },
  /*
  flex
  */
  f_1: {
    flex: 1,
  },
  f_r: {
    flexDirection: 'row',
  },
  f_r_w: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  f_b_s: {
    justifyContent: 'space-between',
  },
  f_b_c: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  f_r_b_c: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  f_r_a_c: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  f_c: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  f_r_c: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  f_c_s: {
    justifyContent: 'center',
  },
  f_r_s_c: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  f_r_b_s: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  f_e_s: {
    justifyContent: 'flex-end',
  },
  f_s_e: {
    alignItems: 'flex-end',
  },
  /*
  backgroundColor
  */
  b_black: {
    backgroundColor: '#000000',
  },
  b_tran: {
    backgroundColor: 'transparent',
  },
  b_d_white: {
    backgroundColor: '#F4F4F4',
  },
  b_white: {
    backgroundColor: '#FFFFFF',
  },
  b_l_blue: {
    backgroundColor: '#737ED0',
  },
  b_l_blue1: {
    backgroundColor: '#E4E6F7',
  },
  b_blue: {
    backgroundColor: '#47519E',
  },
  b_sky_blue: {
    backgroundColor: '#75C1DE',
  },
  b_l_gray: {
    backgroundColor: '#F5F5F9',
  },
  b_d_gray: {
    backgroundColor: '#E3E3E3',
  },
  b_d_gray2: {
    backgroundColor: '#D8D8D8',
  },
  b_l_black: {
    backgroundColor: '#999999',
  },
  b_d_black: {
    backgroundColor: '#999999',
  },
  b_gray: {
    backgroundColor: '#EEEEEE',
  },
  b_d_red: {
    backgroundColor: '#FBD6D7',
  },
  b_l_red: {
    backgroundColor: '#E97577',
  },
  b_red: {
    backgroundColor: '#BA3437',
  },
  b_yellow: {
    backgroundColor: '#E4C776',
  },
  b_topaz: {
    backgroundColor: '#FBCF9B',
  },
  b_green: {
    backgroundColor: '#71AF72',
  },
  b_green1: {
    backgroundColor: '#D4F1D4',
  },
  /*
  color
  */
  c_white: {
    color: '#FFFFFF',
  },
  c_l_blue: {
    color: '#737ED0',
  },
  c_blue: {
    color: '#47519E',
  },
  c_l_black: {
    color: '#333333',
  },
  c_black: {
    color: '#333333',
  },
  c_yellow: {
    color: '#9F6328',
  },
  c_gray: {
    color: '#999999',
  },
  c_d_gray: {
    color: '#888888',
  },
  c_red: {
    color: '#BA3437',
  },
  c_l_red: {
    color: '#BA3437',
  },
  c_abnor_red: {
    color: '#F57E5C',
  },
  c_green: {
    color: '#71AF72',
  },
  c_b_green: {
    color: '#13A615',
  },
  c_b_green1: {
    color: '#71AF72',
  },
  c_nor_green: {
    color: '#97C171',
  },
  /*
  borderColor
  */
  b_c_d_gray: {
    borderWidth: scaleSize(0.5),
    borderColor: '#979797',
  },
  b_c_gray: {
    borderWidth: scaleSize(0.5),
    borderColor: '#E3E3E3',
  },
  b_l_c_gray: {
    borderLeftWidth: scaleSize(0.5),
    borderLeftColor: '#E3E3E3',
  },
  b_r_c_gray: {
    borderRightWidth: scaleSize(0.5),
    borderRightColor: '#E3E3E3',
  },
  b_b_c_gray: {
    borderBottomWidth: scaleSize(0.5),
    borderBottomColor: '#E3E3E3',
  },
  b_b_c_gray_2: {
    borderBottomWidth: scaleSize(2),
    borderBottomColor: '#EEEEEE',
  },
  b_b_c_gray_3: {
    borderBottomWidth: scaleSize(0.5),
    borderBottomColor: '#dddddd',
  },
  b_l_c_gray_3: {
    borderLeftWidth: scaleSize(0.5),
    borderLeftColor: '#dddddd',
  },
  b_t_c_gray: {
    borderTopWidth: scaleSize(0.5),
    borderTopColor: '#E3E3E3',
  },
  b_c_blue: {
    borderWidth: scaleSize(0.5),
    borderColor: '#47519E',
  },
  b_b_c_blue_2: {
    borderBottomWidth: scaleSize(2),
    borderBottomColor: '#47519E',
  },
  b_c_l_gray: {
    borderWidth: scaleSize(0.5),
    borderColor: '#F5F5F9',
  },
  b_c_dgray: {
    borderWidth: scaleSize(0.5),
    borderColor: '#888888',
  },
  /*
  margin
  */
  m_n_r_d5: {
    marginRight: -scaleSize(0.5),
  },
  m_5: {
    margin: scaleSize(5),
  },
  m_t_5: {
    marginTop: scaleSize(5),
  },
  m_b_5: {
    marginBottom: scaleSize(5),
  },
  m_b_25: {
    marginBottom: scaleSize(25),
  },
  m_l_5: {
    marginLeft: scaleSize(5),
  },
  m_r_5: {
    marginRight: scaleSize(5),
  },
  m_h_5: {
    marginHorizontal: scaleSize(5),
  },
  m_v_5: {
    marginVertical: scaleSize(5),
  },
  m_10: {
    margin: scaleSize(10),
  },
  m_t_10: {
    marginTop: scaleSize(10),
  },
  m_b_10: {
    marginBottom: scaleSize(10),
  },
  m_l_10: {
    marginLeft: scaleSize(10),
  },
  m_r_10: {
    marginRight: scaleSize(10),
  },
  m_h_10: {
    marginHorizontal: scaleSize(10),
  },
  m_v_10: {
    marginVertical: scaleSize(10),
  },
  m_15: {
    margin: scaleSize(15),
  },
  m_t_15: {
    marginTop: scaleSize(15),
  },
  m_b_15: {
    marginBottom: scaleSize(15),
  },
  m_l_15: {
    marginLeft: scaleSize(15),
  },
  m_r_15: {
    marginRight: scaleSize(15),
  },
  _m_r_15: {
    marginRight: -scaleSize(15),
  },
  m_h_15: {
    marginHorizontal: scaleSize(15),
  },
  m_v_15: {
    marginVertical: scaleSize(15),
  },
  m_20: {
    margin: scaleSize(20),
  },
  m_t_20: {
    marginTop: scaleSize(20),
  },
  m_b_20: {
    marginBottom: scaleSize(20),
  },
  m_l_20: {
    marginLeft: scaleSize(20),
  },
  m_r_20: {
    marginRight: scaleSize(20),
  },
  m_r_50: {
    marginRight: scaleSize(50),
  },
  m_h_20: {
    marginHorizontal: scaleSize(20),
  },
  m_v_20: {
    marginVertical: scaleSize(20),
  },
  m_b_30: {
    marginBottom: scaleSize(30),
  },
  m_t_50: {
    marginTop: scaleSize(50),
  },
  m_l_65: {
    marginLeft: scaleSize(65),
  },
  m_l_106: {
    marginLeft: scaleSize(106),
  },
  m_r_83: {
    marginRight: scaleSize(83),
  },
  /*
  padding
  */
  p_0: {
    padding: 0,
  },
  p_h_0: {
    paddingHorizontal: 0,
  },
  p_v_0: {
    paddingVertical: 0,
  },
  p_5: {
    padding: scaleSize(5),
  },
  p_t_5: {
    paddingTop: scaleSize(5),
  },
  p_b_5: {
    paddingBottom: scaleSize(5),
  },
  p_l_5: {
    paddingLeft: scaleSize(5),
  },
  p_r_5: {
    paddingRight: scaleSize(5),
  },
  p_h_5: {
    paddingHorizontal: scaleSize(5),
  },
  p_v_5: {
    paddingVertical: scaleSize(5),
  },
  p_10: {
    padding: scaleSize(10),
  },
  p_t_10: {
    paddingTop: scaleSize(10),
  },
  p_b_10: {
    paddingBottom: scaleSize(10),
  },
  p_l_10: {
    paddingLeft: scaleSize(10),
  },
  p_r_10: {
    paddingRight: scaleSize(10),
  },
  p_h_10: {
    paddingHorizontal: scaleSize(10),
  },
  p_v_10: {
    paddingVertical: scaleSize(10),
  },
  p_15: {
    padding: scaleSize(15),
  },
  p_t_15: {
    paddingTop: scaleSize(15),
  },
  p_b_15: {
    paddingBottom: scaleSize(15),
  },
  p_l_15: {
    paddingLeft: scaleSize(15),
  },
  p_r_15: {
    paddingRight: scaleSize(15),
  },
  p_h_15: {
    paddingHorizontal: scaleSize(15),
  },
  p_v_15: {
    paddingVertical: scaleSize(15),
  },
  p_20: {
    padding: scaleSize(20),
  },
  p_t_20: {
    paddingTop: scaleSize(20),
  },
  p_b_20: {
    paddingBottom: scaleSize(20),
  },
  p_l_20: {
    paddingLeft: scaleSize(20),
  },
  p_r_20: {
    paddingRight: scaleSize(20),
  },
  p_h_20: {
    paddingHorizontal: scaleSize(20),
  },
  p_v_20: {
    paddingVertical: scaleSize(20),
  },
  /*
  fontFamily
  */
  icon: {
    fontFamily: 'iconfont',
  },
  /*
  fontSize
  */
  f_7: {
    fontSize: setSpText(7),
  },
  f_9: {
    fontSize: setSpText(9),
  },
  f_10: {
    fontSize: setSpText(10),
  },
  f_11: {
    fontSize: setSpText(11),
  },
  f_12: {
    fontSize: setSpText(12),
  },
  f_13: {
    fontSize: setSpText(13),
  },
  f_14: {
    fontSize: setSpText(14),
  },
  f_16: {
    fontSize: setSpText(16),
  },
  f_17: {
    fontSize: setSpText(17),
  },
  f_18: {
    fontSize: setSpText(18),
  },
  f_20: {
    fontSize: setSpText(20),
  },
  f_24: {
    fontSize: setSpText(24),
  },
  f_30: {
    fontSize: setSpText(30),
  },
  f_40: {
    fontSize: setSpText(40),
  },
  f_54: {
    fontSize: setSpText(54),
  },
  /*
  fontWeight
  */
  f_200: {
    fontWeight: '200',
  },
  f_300: {
    fontWeight: '300',
  },
  f_400: {
    fontWeight: '400',
  },
  f_500: {
    fontWeight: '500',
  },
  f_600: {
    fontWeight: '600',
  },
  /*
  width
  */
  w_f: {
    width,
  },
  w_6: {
    width: scaleSize(6),
  },
  w_7: {
    width: scaleSize(7),
  },
  w_8: {
    width: scaleSize(8),
  },
  w_10: {
    width: scaleSize(10),
  },
  w_13: {
    width: scaleSize(13),
  },
  w_15: {
    width: scaleSize(15),
  },
  w_20: {
    width: scaleSize(20),
  },
  w_30: {
    width: scaleSize(30),
  },
  w_40: {
    width: scaleSize(40),
  },
  w_45: {
    width: scaleSize(45),
  },
  w_50: {
    width: scaleSize(50),
  },
  w_55: {
    width: scaleSize(55),
  },
  w_60: {
    width: scaleSize(60),
  },
  w_65: {
    width: scaleSize(65),
  },
  w_75: {
    width: scaleSize(75),
  },
  w_80: {
    width: scaleSize(80),
  },
  w_90: {
    width: scaleSize(90),
  },
  w_100: {
    width: scaleSize(100),
  },
  w_120: {
    width: scaleSize(120),
  },
  w_110: {
    width: scaleSize(110),
  },
  w_125: {
    width: scaleSize(125),
  },
  w_140: {
    width: scaleSize(140),
  },
  w_160: {
    width: scaleSize(160),
  },
  w_165: {
    width: scaleSize(165),
  },
  w_200: {
    width: scaleSize(200),
  },
  w_250: {
    width: scaleSize(250),
  },
  w_270: {
    width: scaleSize(270),
  },
  w_310: {
    width: scaleSize(310),
  },
  w_340: {
    width: scaleSize(340),
  },
  /*
  height
  */
  h_f: {
    height,
  },
  h_3: {
    height: scaleSize(3),
  },
  h_5: {
    height: scaleSize(5),
  },
  h_6: {
    height: scaleSize(6),
  },
  h_7: {
    height: scaleSize(7),
  },
  h_8: {
    height: scaleSize(8),
  },
  h_10: {
    height: scaleSize(10),
  },
  h_13: {
    height: scaleSize(13),
  },
  h_14: {
    height: scaleSize(14),
  },
  h_20: {
    height: scaleSize(20),
  },
  h_25: {
    height: scaleSize(25),
  },
  h_30: {
    height: scaleSize(30),
  },
  h_35: {
    height: scaleSize(35),
  },
  h_40: {
    height: scaleSize(40),
  },
  h_45: {
    height: scaleSize(45),
  },
  h_50: {
    height: scaleSize(50),
  },
  h_60: {
    height: scaleSize(60),
  },
  h_65: {
    height: scaleSize(65),
  },
  h_75: {
    height: scaleSize(75),
  },
  h_80: {
    height: scaleSize(80),
  },
  h_90: {
    height: scaleSize(90),
  },
  h_95: {
    height: scaleSize(95),
  },
  h_100: {
    height: scaleSize(100),
  },
  h_110: {
    height: scaleSize(110),
  },
  h_125: {
    height: scaleSize(125),
  },
  h_135: {
    height: scaleSize(135),
  },
  h_140: {
    height: scaleSize(140),
  },
  h_155: {
    height: scaleSize(155),
  },
  h_160: {
    height: scaleSize(160),
  },
  h_165: {
    height: scaleSize(165),
  },
  h_180: {
    height: scaleSize(180),
  },
  h_200: {
    height: scaleSize(200),
  },
  h_220: {
    height: scaleSize(220),
  },
  h_275: {
    height: scaleSize(275),
  },
  /*
  lineHeight
  */
  l_h_22: {
    lineHeight: scaleSize(22, true),
  },
  /*
  borderRadius
  */
  b_r_0: {
    borderRadius: scaleSize(0),
  },
  b_r_2: {
    borderRadius: scaleSize(2),
  },
  b_r_3: {
    borderRadius: scaleSize(3),
  },
  b_r_4: {
    borderRadius: scaleSize(4),
  },
  b_t_r_r_4: {
    borderTopRightRadius: scaleSize(4),
  },
  b_b_r_r_4: {
    borderBottomRightRadius: scaleSize(4),
  },
  b_r_5: {
    borderRadius: scaleSize(5),
  },
  b_r_7: {
    borderRadius: scaleSize(7),
  },
  b_r_8: {
    borderRadius: scaleSize(8),
  },
  b_r_10: {
    borderRadius: scaleSize(10),
  },
  b_r_15: {
    borderRadius: scaleSize(15),
  },
  b_r_20: {
    borderRadius: scaleSize(20),
  },
  b_r_25: {
    borderRadius: scaleSize(25),
  },
  b_r_55: {
    borderRadius: scaleSize(55),
  },
  b_r_30: {
    borderRadius: scaleSize(30),
  },
  /*
  overflow
  */
  o_h: {
    overflow: 'hidden',
  },
  /*
  zIndex
  */
  z_0: {
    zIndex: 0,
  },
  z_100: {
    zIndex: 100,
  },
  z_200: {
    zIndex: 200,
  },
  z_500: {
    zIndex: 500,
  },
  z_800: {
    zIndex: 800,
  },
  z_1000: {
    zIndex: 1000,
  },
  /*
  textAlign
  */
  t_l: {
    textAlign: 'left',
  },
  t_c: {
    textAlign: 'center',
  },
  t_r: {
    textAlign: 'right',
  },

  /*
  input 多行居顶显示
  */
  t_a_t: {
    textAlignVertical: 'top',
  },
})

// const styles = (params) => {
//   if (typeof params == 'string') {
//     return StyleSheet.flatten(MyStyles[params])
//   } else if (typeof params == 'number') {
//     return StyleSheet.flatten(params)
//   } else {
//     return {}
//   }
// }
// Object.assign(styles, MyStyles)

export default BaseStyle
