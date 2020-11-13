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
            component: () => import('../views/Login.vue'),
        },

        { //懒加载
            path: '/main',
            component: () => import('../views/layout/Main.vue'),
            children: [
                {
                    path: '',
                    redirect: 'workplace-index',
                },
                {
                    path: 'workplace-index',
                    name: 'OA工作台',

                    component: () => import('../views/workplace/Main.vue'),
                },
                {
                    path: 'template',
                    name: '标准页',

                    component: () => import('../views/workplace/template.vue'),
                },
            ]
        }
    ]
});
