// 文件名-尽量和模块页面文件名统一(方便查找)
import request from '@/utils/request'

// 热搜关键字
export const hotSearch = (params) =>
  request({
    url: "/search/hot",
    params,
  });
// // 搜索结果列表
export const searchResultList = params => request({
  url: "/cloudsearch",
  params
})
