import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/TaskList'
import AddTask from '@/components/AddTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/add',
      name: 'AddTask',
      component: AddTask
    }
  ]
})
