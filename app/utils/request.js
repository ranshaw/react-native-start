import { AsyncStorage, Platform } from 'react-native'
import * as content from '../config/server/baseConstant'
import * as develpment from '../config/server/developmentProperties'
import { checkEexception } from '../config/server/switchException'

let os
if (Platform.OS === 'ios') {
  os = 'ios'
} else {
  os = 'android'
}
// 初始化数据-默认从AsyncStorage中获取数
async function getInitAuthentication() {
  try {
    // console.log('===============>>>>>>>>>>>>>>>>>开始token')
    let value
    await AsyncStorage.getItem(content.authentication, (error, result) => {
      if (!error) {
        // console.log('===============>>>>>>>>>>>>>>>>>取到token', result)
        value = result
      }
    })

    // console.log('===============>>>>>>>>>>>>>>>>>结束token')
    if (value === null) {
      // const error = new Error('存储中无token数据,初始化为空数据')
      // throw error
    }
    return value
  } catch (error) {
    return null
  }
}
// token存储在本地
function setInitAuthentication(url, t) {
  try {
    if (
      url === '/user/userLogin' ||
      url === '/massbroker/register' ||
      url === '/massbroker/choseBuild'
    ) {
      console.log('=============保存token', JSON.stringify(t))
      AsyncStorage.setItem(content.authentication, t.token)
      AsyncStorage.setItem(content.roleCode, t.role)
    }
  } catch (error) {
    // console.log('=============保存token失败', error.message)
  }
}
// token删除
exports.setRemoveAuthentication = async function remove() {
  try {
    AsyncStorage.removeItem(content.authentication)
  } catch (error) {
    // console.log('=============保存token失败', error.message)
  }
}

// 返回数据验证
async function checkStatus(response) {
  try {
    // console.log('resp code::::::::', response.status)
    if (
      (response.status >= 200 && response.status < 300) ||
      response.status === 302
    ) {
      // console.log('resp code::::::::请求返回', response)
      const d = await response.json()
      if (d.code === content.unlogin) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>未登陆')
        // Actions.login({ type: ActionConst.REPLACE })
        return checkEexception(d.code, d.message, d.data)
      } else if (d.code !== content.codeSuccess) {
        return checkEexception(d.code, d.message, d.data)
      }
      return d
    }
    return checkEexception('000000', '系统异常', [])
  } catch (e) {
    console.log('=====>>>>>>>>>>>>>>>>>>>request解析返回数据出错', e)
    checkEexception('000000', '系统异常', [])
  } finally {
    checkEexception('000000', '系统异常', [])
  }
}

function buildPath(url, model) {
  let addr = ''
  switch (model) {
    case content.member:
      addr = develpment.memberDevelopment() + url
      break
    case content.rigths:
      addr = develpment.rightsDevelopment() + url
      break
    case content.shop:
      addr = develpment.shopDevelopment() + url
      break
    case content.prod:
      addr = develpment.prodDevelopment() + url
      break
    case content.coup:
      addr = develpment.coupDevelopment() + url
      break
    case content.order:
      addr = develpment.orderDevelopment() + url
      break
    case content.house:
      addr = develpment.houseDevelopment() + url
      break
    case content.myhome:
      addr = develpment.myhomeDevelopment() + url
      break
    case content.upload:
      addr = develpment.uploadDevelopment() + url
      break
    default:
      console.log('===============>>>>>>>>>>>>>>>>>请求路径不再定义范围内')
      addr = url
      break
  }
  return addr
}
// 超时版的fetch
function _fetch(fetch, timeout) {
  return Promise.race([
    fetch,
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('request timeout')), timeout)
    }),
  ])
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options, model) {
  const authentication = await getInitAuthentication()
  let opt
  if (authentication === null) {
    // console.log('=============进入无token')
    opt = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json', token: authentication },
      headers: {
        'Content-Type': 'application/json',
        appVer: content.vision,
        platform: os,
      },
    }
  } else {
    opt = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json', token: authentication },
      headers: {
        'Content-Type': 'application/json',
        appver: content.vision,
        platform: os,
        token: authentication,
      },
    }
  }
  // console.log('===============>>>>>>>>>>>>>>>>>返回token', authentication)

  if (options) {
    opt = { ...opt, ...options }
  }
  let data
  let path
  try {
    path = buildPath(url, model)

    const response = await _fetch(fetch(path, opt), 20000)
    data = await checkStatus(response)
    if (data.code === content.codeSuccess) {
      setInitAuthentication(url, data.data)
    }
  } catch (e) {
    data = checkEexception('0000000', '网络异常', e)
    // Actions.networkAnomalie({ type: ActionConst.REPLACE })

    console.log(path, '=======>>>>>>>>>>>>>>>>>>请求报错', path, e)
  }

  const ret = {
    data,
  }
  return ret
}
