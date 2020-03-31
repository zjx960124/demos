function load(component) {
  return resolve => require([`@/${component}`], resolve)
}
export default [
  {
    path:'/home',
    name:'home',
    component: load('views/home'),
    meta:{title:'登录'}
  }
]
