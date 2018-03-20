const develpment = 'upload' // prd
function checkDevalpment() {
  let addr = ''
  switch (develpment) {
    case 'local':
      addr = 'http://192.168.1.70'
      break
    case 'dev':
      addr = 'http://121.196.222.20'
      break
    case 'test':
      addr = 'http://192.168.1.55' // 'http://192.168.1.16'
      break
    case 'pre':
      addr = 'http://121.196.222.20'
      break
    case 'prd':
      addr = 'http://101.132.88.243'
      break
    case 'upload':
      addr = 'http://47.97.110.237'
      break
    case 'wanghua':
      addr = 'http://192.168.1.26'
      break
    case 'han':
      addr = 'http://192.168.1.34'
      break
    default:
      addr = 'http://121.196.222.20'
      break
  }
  return addr
}
function checkDevalpment2() {
  let addr = ''
  switch (develpment) {
    case 'local':
      addr = 'http://192.168.1.70'
      break
    case 'dev':
      addr = 'http://120.27.218.225'
      break
    case 'test':
      addr = 'http://192.168.1.85' // ''
      break
    case 'pre':
      addr = 'http://120.27.218.225'
      break
    case 'prd':
      addr = 'http://101.132.88.243'
      break
    case 'upload':
      addr = 'http://47.97.110.237'
      break
    case 'wanghua':
      addr = 'http://192.168.1.26'
      break
    case 'han':
      addr = 'http://192.168.1.34'
      break
    default:
      addr = 'http://120.27.218.225'
      break
  }
  return addr
}
function checkhouseDevalpment() {
  let addr = ''
  switch (develpment) {
    case 'local':
      addr = 'http://120.55.241.72/'
      break
    case 'dev':
      addr = 'http://120.55.241.72/'
      break
    case 'test':
      addr = 'http://120.55.241.72/'
      break
    case 'pre':
      addr = 'http://shop.brc.com.cn/'
      break
    case 'prd':
      addr = 'http://shop.brc.com.cn/'
      break
    default:
      addr = 'http://shop.brc.com.cn/'
      break
  }
  return addr
}

// 会员
exports.memberDevelopment = function member() {
  const dev = checkDevalpment2()
  const res = `${dev}:8444`
  return res
}
// 权益
exports.rightsDevelopment = function rights() {
  const dev = checkDevalpment2()
  // let res = `${dev}:8888/card`
  const res = `${dev}:8082`
  return res
}
// 商城
exports.shopDevelopment = function shop() {
  const dev = checkDevalpment()
  // let res = `${dev}:8888/shop`
  const res = `${dev}:8888`
  return res
}
// 订单
exports.orderDevelopment = function order() {
  const dev = checkDevalpment()
  // let res = `${dev}:8088/order`
  const res = `${dev}:8088`
  return res
}
// 产品
exports.prodDevelopment = function prod() {
  if (develpment === 'prd') return 'http://101.132.88.243:8087'
  const dev = checkDevalpment()
  // let res = `${dev}:8087/prod`
  const res = `${dev}:8087`
  return res
}
// 订单
exports.coupDevelopment = function coup() {
  const dev = checkDevalpment()
  // let res = `${dev}:8089/coup`
  const res = `${dev}:8089`
  return res
}
// 楼盘
exports.houseDevelopment = function house() {
  const dev = checkhouseDevalpment()
  const res = `${dev}`
  return res
}
// 家
exports.myhomeDevelopment = function myhome() {
  if (develpment === 'prd') return 'http://101.132.88.243:8087/home'
  const dev = checkDevalpment()
  const res = `${dev}:8087/home`
  return res
}
// 其他
exports.otherMemberDevelopment = function other() {
  return ''
}
exports.uploadDevelopment = function uploadDevelopment() {
  const dev = checkDevalpment()
  const res = `${dev}:8444`
  // let res = 'http://192.168.1.136:8077/a'
  // let res = 'http://10.223.42.102:8081/'
  return res
}
