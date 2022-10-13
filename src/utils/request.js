// 网络请求 - 二次封装   
import axios from 'axios'
// axios.create()是添加了自定义配置的新的axios
axios.defaults.baseURL = "http://localhost:3000"
export default axios  //对外暴露出axios  , 默认导出