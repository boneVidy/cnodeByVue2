import List from 'PAGES/List.vue'

const routers = [
  {
    path: '/',
    name: 'home',
    component: List
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: resolve => {
      require.ensure(['PAGES/detail.vue'], () => {
        resolve(require('PAGES/detail.vue'))
      })
    }
  }
  // {
  //   path: '*',
  //   component: List
  // }
]

export default routers
