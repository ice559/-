import Vue from 'vue'
import App from './App.vue'

import router from '@/router' //引入路由对象

// 注意文件引入路径千万不要写错了哈
// js文件后缀可以省略 css文件后缀千万不能省略
import "@/mobile/flexible"  //适配
import "@/styles/reset.css"  //初始化样式

// 注册组件区域--------------------------------
//注册 button 组件
import { Button ,Tabbar, TabbarItem, NavBar,} from 'vant';
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
import { Col, Row, Image as VanImage ,Cell, Icon} from 'vant';
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(Icon);
import { Search } from 'vant'
Vue.use( Search )
import { List } from 'vant';
Vue.use(List);

// 测试 需要运行本地接口打开cmd终端输入 node app.js
// import { recommendMusicAPI } from '@/api/index'
// async function myFn(){
//   const res = await recommendMusicAPI({
// limit: 2
// });
//   console.log(res);
// }
// myFn();

//目标: 让vant适配
// 1.下载 postcss  postcss-pxtorem
// 



 Vue.config.productionTip = false

//5.关联到vue实例
new Vue({
  router,
  render: h => h(App),
 
}).$mount('#app')
