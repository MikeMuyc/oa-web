import Vue from 'vue';
import Router from 'vue-router';
import notice from './notice'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/main',
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue'),
        },

        { //懒加载
            path: '/main',
            component: () => import('../views/layout/Main.vue'),
            children: [
                {
                    path: '',
                    redirect: 'workplaceIndex',
                },
                {
                    path: 'workplaceIndex',
                    name: 'OA工作台',

                    component: () => import('../views/workplace/Main.vue'),
                },

                {
                    path: '/template',
                    name: '标准页',

                    component: () => import('../views/template.vue'),
                },
<<<<<<< HEAD
                {
                    path: 'addressbook-index',
                    meta: {
                        name: '通讯录'
                    },
                    component: () => import('../views/addressbook/Main.vue'),
                },
=======
                ...notice,

>>>>>>> 7f892291ca66d6d0528fb8511dcc68a927c88317
            ]
        },



    ]
});
