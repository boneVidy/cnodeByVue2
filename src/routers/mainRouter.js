import Home from 'PAGES/Home.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: 'detail',
    name: 'detail',
    component: resolve => {
      require.ensure(['PAGES/detail.vue'], () => {
        resolve(require('PAGES/detail.vue'))
      })
    }
  },
  {
    path: '*',
    component: Home
  }
]

export default routers
