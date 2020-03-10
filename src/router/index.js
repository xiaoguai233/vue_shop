import Vue from 'vue';
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {   path:'/',
            component:Login
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    //to将要访问的路径
    //from从哪个路径跳转过来
    //next是一个函数，代表放行，next()  放行  next('/login') 强制跳转到login页面
    if(to.path ==='/login')return next();
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr)return next('/login')
    //不管前面放什么一定要放一个next()
    next()
})
export default router