import vueConfig from '../../vue.config'

export const config = {
  port: vueConfig.devServer.port,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  sellUrl: 'http://127.0.0.1:8088',
  openidUrl: 'http://127.0.0.1:8088',
  wechatPayUrl: 'http://127.0.0.1:8088'
}