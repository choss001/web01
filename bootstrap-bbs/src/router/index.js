import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Board from '@/components/Board'
import ContentDetail from '@/components/ContentDetail'
import Create from '@/components/Create'
import CommentList from '@/components/CommentList'
import VueCharts from '@/components/VueCharts'
import VueChartKick from '@/components/VueChartKick'
import VueChartJS from '@/components/VueChartJS'
import PopularSearch from '@/components/PopularSearch'
import Axios from '@/components/Axios'
import Board2 from '@/components/Board2'
import ContentDetail2 from '@/components/ContentDetail2'
import CommentCreate2 from '@/components/CommentCreate2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path:'/board/free/comment',
      name:'CommentList',
      component: CommentList
    },
    {
      path: '/charts',
      name:'VueCharts',
      component: VueCharts
    },
    {
      path: '/chartkick',
      name:'VueChartKick',
      component: VueChartKick
    },
    {
      path: '/chartjs',
      name:'VueChartJS',
      component: VueChartJS
    },
    {
      path: '/popular',
      name:'PopularSearch',
      component: PopularSearch
    },
    {
      path: '/axios',
      name:'Axios',
      component: Axios
    },
    {
      path: '/board2',
      name:'Board2',
      component: Board2
    },
    {
      path: '/ContentDetail2/:id?',
      name:'ContentDetail2',
      component: ContentDetail2
    },
    {
      path: '/CommentCreate2/:id?',
      name:'CommentCreate2',
      component: CommentCreate2
    }


  ]
})