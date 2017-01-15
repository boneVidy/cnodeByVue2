import Timeago from 'timeago.js'
function setFilter (Vue) {
  const timeago = new Timeago(null, 'zh_CN')
  Vue.filter('timeago', function (date) {
    return timeago.format(date)
  })
}
export default setFilter

