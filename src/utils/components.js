import Vue from 'vue'

const files = require.context('@/components/common/', true, /\.vue$/)

files.keys().forEach((key) => {
  const name = key.replace(/(.*\/|\.vue$)/g, '')
  const component = files(key).default

  Vue.component(name, component)
})
