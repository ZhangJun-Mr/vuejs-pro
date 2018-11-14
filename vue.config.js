module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/foo': {
        target: 'http://127.0.0.1:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/foo': '/'
        }
      }
    }
  }
};