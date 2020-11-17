
export default [
    {
        name: '收文管理',
        path: 'receiveList',
        meta:{
            pname:'公文收发',
        },
        component: () => import('@oa/views/document/receiveList.vue'),
    },
    {
        name: '发文管理',
        path: 'sentList',
        meta:{
            pname:'公文收发',
        },
        component: () => import('@oa/views/document/sentList.vue'),
    },
]
