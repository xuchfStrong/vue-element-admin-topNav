/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: '/charts/keyboard',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: '/charts/keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'keyboardChart', icon: 'chart', noCache: true }
    },
    {
      path: '/charts/line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'lineChart', icon: 'chart', noCache: true }
    },
    {
      path: '/charts/mixchart',
      component: () => import('@/views/charts/mixChart'),
      name: 'MixChart',
      meta: { title: 'mixChart', noCache: true }
    }
  ]
}

export default chartsRouter
