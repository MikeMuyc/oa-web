import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/main',
        },
        {
            path: '/login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/home',
            component: () => import('./views/Home.vue'),
        },


        { //懒加载
            path: '/main',
            component: () => import('./layout/Main.vue'),
            children: [
                // {
                //     path: '',
                //     redirect: '',
                // },
                // {
                //     path: '',
                //     meta: {
                //         name: ''
                //     },
                //     component: () => import(''),
                    // children: [
                    //     {
                    //         path: '',
                    //         redirect: 'user',
                    //     },
                    //     {
                    //         path: 'user',
                    //         meta: {
                    //             name: 'user'
                    //         },
                    //         component: () => import('@suc/authox/pages/user.vue'),
                    //         children: [
                    //             {
                    //                 path: '',
                    //                 redirect: 'userList',
                    //             },
                    //             {
                    //                 path: 'userList',
                    //                 component: () => import('@suc/authox/pages/user/userList.vue')
                    //             },
                    //             {
                    //                 path: 'userEdit',
                    //                 component: () => import('@suc/authox/pages/user/userEdit.vue')
                    //             }
                    //         ]
                    //     },
                       
                        
                    // ]
                // },
                {
                    path: 'map',
                    meta: {
                        name: 'map'
                    },
                    component: () => import('./views/Map.vue'),
                },
                {
                    path: 'echarts',
                    meta: {
                        name: 'echarts'
                    },
                    component: () => import('./views/Echarts.vue'),
                },
                {
                    path: 'vuex',
                    name: 'vuex',
                    meta: {
                        name: 'vuex'
                    },
                    component: () => import('./views/Vuex.vue')
                }
            ]
        }
    ]
});
