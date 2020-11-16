import Vue from 'vue';
import Router from 'vue-router';
import notice from './notice';
import addressbook from './addressbook';
Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/login',
            component: () => import('@oa/views/Login.vue'),
        },

        { //懒加载
            path: '/main',
            redirect: 'main/AppMain',
            component: () => import('@oa/views/layout/Main.vue'),
            children: [
                {
                    path: 'AppMain',
                    redirect: 'AppMain/workplaceIndex',
                    component: () => import('@oa/views/layout/components/AppMain.vue'),
                    children:[
                        {
                            path: 'workplaceIndex',
                            name: 'OA工作台',

                            component: () => import('@oa/views/workplace/Main.vue'),
                        },
                        {
                            path: '/template',
                            name: '标准页',

                            component: () => import('@oa/views/template.vue'),
                        },

                        {
                            name: '公告列表',
                            path: 'noticeList',

                            component: () => import('@oa/views/notice/noticeList.vue'),
                        },
                        {
                            name: '日报周报',
                            path: 'dailyReportList',
                            component: () => import('@oa/views/dailyReport/dailyReportList.vue'),

                        },
                        ...addressbook,

                    ]
                },
                {
                    path: 'AddMain',
                    component: () => import('@oa/views/layout/components/noSlide_Main.vue'),
                    children:[
                        {
                            name: '新增公告',
                            path: 'addNotice',

                            component: () => import('@oa/views/notice/addNotice.vue'),
                        },
                    ]
                },

            ]
        },

        {
            path: '/*',
            redirect: '/main',
        },
    ]
});
