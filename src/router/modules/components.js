/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: '/components/tinymce',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    {
      path: '/components/tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: 'tinymce' }
    },
    {
      path: '/components/markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: { title: 'markdown' }
    },
    {
      path: '/components/json-editor',
      component: () => import('@/views/components-demo/jsonEditor'),
      name: 'JsonEditorDemo',
      meta: { title: 'jsonEditor' }
    },
    {
      path: '/components/splitpane',
      component: () => import('@/views/components-demo/splitpane'),
      name: 'SplitpaneDemo',
      meta: { title: 'splitPane' }
    },
    {
      path: '/components/avatar-upload',
      component: () => import('@/views/components-demo/avatarUpload'),
      name: 'AvatarUploadDemo',
      meta: { title: 'avatarUpload' }
    },
    {
      path: '/components/dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: 'DropzoneDemo',
      meta: { title: 'dropzone' }
    },
    {
      path: '/components/sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'sticky' }
    },
    {
      path: '/components/count-to',
      component: () => import('@/views/components-demo/countTo'),
      name: 'CountToDemo',
      meta: { title: 'countTo' }
    },
    {
      path: '/components/mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'componentMixin' }
    },
    {
      path: '/components/back-to-top',
      component: () => import('@/views/components-demo/backToTop'),
      name: 'BackToTopDemo',
      meta: { title: 'backToTop' }
    },
    {
      path: '/components/drag-dialog',
      component: () => import('@/views/components-demo/dragDialog'),
      name: 'DragDialogDemo',
      meta: { title: 'dragDialog' }
    },
    {
      path: '/components/drag-select',
      component: () => import('@/views/components-demo/dragSelect'),
      name: 'DragSelectDemo',
      meta: { title: 'dragSelect' }
    },
    {
      path: '/components/dnd-list',
      component: () => import('@/views/components-demo/dndList'),
      name: 'DndListDemo',
      meta: { title: 'dndList' }
    },
    {
      path: '/components/drag-kanban',
      component: () => import('@/views/components-demo/dragKanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'dragKanban' }
    }
  ]
}

export default componentsRouter
