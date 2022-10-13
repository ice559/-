// 路由-相关模块
import Vue from 'vue'
// 1.导入路由
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
// 404文件
import NotFound from '@/views/NotFound'

// 2.使用路由插件调用vue.use()
Vue.use(VueRouter)
// 3.创建路由规则
const routes = [
    {
        path: '/',  //默认hash值路径
        redirect: '/layout'  //重定向到/layout
    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',//默认打开显示的页面
        children: [//配置二级路径
            {
                path: 'home',
                component: Home,
                meta:{//meta 保存路由对象额外信息
                    title:"首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: "搜索"
                }
            }
        ]
    },
    {
        path: '/play',
        component: Play
    },
    {//404
        path:'*',
        component:NotFound
    }
]
// 4.创建路由对象 - 传入规则
const router = new VueRouter({
    routes
})
// 将router导出  然后在main.js引入
export default router