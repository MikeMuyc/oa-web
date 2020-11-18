export default [
    {
        name: '用户管理',
        path: 'management/user',
        meta: {
            pname: '系统管理',
        },
        component: () => import('@oa/views/management/User.vue'),
    },
    {
        name: '权限管理',
        path: 'management/auth',
        meta: {
            pname: '系统管理',
        },
        component: () => import('@oa/views/management/Auth.vue'),
    },
    {
        name: '流程管理',
        path: 'management/process',
        meta: {
            pname: '系统管理',
        },
        component: () => import('@oa/views/management/Process.vue'),
    }
]
