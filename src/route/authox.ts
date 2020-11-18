
export default [
{
    path: 'authox',
    meta: {
        name: '权限管理'
    },
    component: () =>
        import ('@oa/views/authox/authox.vue'), //懒加载权限模块入口
    children: [{
            path: '',
            redirect: 'user',  //默认路由用户管理列表
        },
        {    //用户管理
            path: 'user',
            name:'用户管理',
            meta: {
                name: 'user'
            },
            component: () =>
                import ('@oa/views/authox/pages/user.vue'),
            children: [{
                path: '',
                redirect: 'userList',
            }, {
                path: 'userList',
                component: () =>
                    import ('@oa/views/authox/pages/user/userList.vue')
            }, {
                path: 'userEdit',
                component: () =>
                    import ('@oa/views/authox/pages/user/userEdit.vue')
            }]
        },
        {    //群组管理
            path: 'group',
            name:'群组管理',
            meta: {
                name: 'group'
            },
            component: () =>
                import ('@oa/views/authox/pages/group.vue'),
            children: [{
                path: '',
                redirect: 'groupList',
            }, {
                path: 'groupList',
                component: () =>
                    import ('@oa/views/authox/pages/group/groupList.vue')
            }, {
                path: 'groupEdit',
                component: () =>
                    import ('@oa/views/authox/pages/group/groupEdit.vue')
            }]
        },
        {    //角色管理
            path: 'role',
            name:'角色管理',
            meta: {
                name: 'role'
            },
            component: () =>
                import ('@oa/views/authox/pages/role.vue'),
            children: [{
                path: '',
                redirect: 'roleList',
            }, {
                path: 'roleList',
                component: () =>
                    import ('@oa/views/authox/pages/role/roleList.vue')
            }, {
                path: 'roleEdit',
                component: () =>
                    import ('@oa/views/authox/pages/role/roleEdit.vue')
            }]
        }
    ]
}]