// api文件夹下 各个请求模块js, 都统一来到index.js再向外导出

import {recommendMusic, newMusic} from './Home'//按需导入
export const newMusicAPI = newMusic // 首页最新音乐
export const recommendMusicAPI = recommendMusic // 请求推荐歌单的方法导出

import {hotSearch,searchResultList} from '@/api/Search'
export const hotSearchAPI = hotSearch // 热搜
export const searchResultListAPI = searchResultList // 搜索结果

import {getSongById, getLyricById} from '@/api/Play'

export const  getSongByIdAPI = getSongById
export const  getLyricByIdAPI = getLyricById