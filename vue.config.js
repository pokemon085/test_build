const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'  //test_build 為 repo 名稱
    ? '/test_build/'
    : '/'
})
