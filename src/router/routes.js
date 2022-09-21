//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
export default [
    {
        path: '/pay',   
        component: Pay,
        meta: { show: true } //配置元信息
    },
    {
        path: '/trade',   
        component: Trade,
        meta: { show: true } //配置元信息
    },
    {
        path: '/shopcart',   
        component: ShopCart,
        meta: { show: true } //配置元信息
    },
    {
        path: '/addcartsuccess',   //商品详情传参
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true } //配置元信息
    },
    {
        path: '/detail/:skuid',   //商品详情传参
        component: Detail,
        meta: { show: true } //配置元信息
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true } //配置元信息
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        name: 'search',
        path: '/search/:keyword?', //指定params参数可传可不传
        component: Search,
        meta: { show: true },
        // props:true  布尔值,传递params参数
        // props:{keyWord:1} 对象写法
        // props($route) {  函数写法,传递query,params参数
        //     return {keyWord:$route.params}
        // }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    //重定向,定向到主页面
    {
        path: '*',
        redirect: '/home'
    }
]