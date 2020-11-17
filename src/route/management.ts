export default [

            {
                name: '用户管理',
                path: 'management/user',
                component: () => import('@oa/views/management/User.vue'),
            },
            {
                name: '权限管理',
                path: 'management/auth',
                component: () => import('@oa/views/management/Auth.vue'),
            },
            {
                name: '流程管理',
                path: 'management/process',
                component: () => import('@oa/views/management/Process.vue'),
            }
]