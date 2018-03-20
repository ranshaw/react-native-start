import Detail from './routes/Detail'
/**
 * [参考资料]
 * react-navigation 官方API  https://reactnavigation.org/docs/stack-navigator.html
 * 网友对官方API的解读  http://blog.csdn.net/sinat_17775997/article/details/72529287
 */

// 页面注册
const RouteConfigs = {
  Detail: {
    screen: Detail,
  },
}
const StackNavigatorConfig = {
  navigationOptions: {
    header: null,
  },
  initialRouteName: 'Tab', // 设置初始页面
}

export { RouteConfigs, StackNavigatorConfig }
