// 返回数据验证
exports.checkEexception = function checkEexception(c, m, d) {
  let result = null
  let code = null
  let message = null
  const data = d
  switch (c) {
    case 'S000010':
      code = c
      message = '系统异常'
      break
    case 'V000001':
      code = c
      message = '参数校验失败'
      break
    case '4a5sdf':
      code = c
      message = '已经绑定'
      break
    case 's45445':
      code = c
      message = '已经绑定'
      break
    case 'a54556':
      code = c
      message = '卡号不存在'
      break
    case 'E2333':
      code = c
      message = '权益卡类型不存在'
      break
    case 'E6556d':
      code = c
      message = '券号或密码错误'
      break
    case 'E545':
      code = c
      message = '权益卡未关联权益'
      break
    case 'E878':
      code = c
      message = '权益不存在'
      break
    case 'S0001':
      code = c
      message = '登录失败，缺少token'
      break
    case 'L0001':
      code = c
      message = '登录失败'
      break
    case 'R0002':
      code = c
      message = '已经注册，请直接登录'
      break
    default:
      code = 'S000010'
      message = '系统异常'
      break
  }
  code = c
  message = m
  result = { ...result, code, message, data }
  return result
}
exports.checkEexceptionError = function checkEexceptionError() {
  let result = null
  let code = null
  const message = '系统错误，没有返回对应错误编码'
  const data = []
  code = '000000'
  result = { ...result, code, message, data }
  return result
}
