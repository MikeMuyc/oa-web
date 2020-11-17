import Vue from 'vue';
import Router from 'vue-router';
import document from './document';
import addressbook from './addressbook';
import management from './management';
import supplies from './supplies';
import { component } from 'vue/types/umd';
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
                            name: '通知公告',
                            path: 'noticeList',

                            component: () => import('@oa/views/notice/noticeList.vue'),
                        },
                        {
                            name: '日报周报',
                            path: 'dailyReportList',
                            component: () => import('@oa/views/dailyReport/dailyReportList.vue'),

                        },
                        ...addressbook,
                        ...document,
                        ...management,
                        ...supplies

                    ]
                },
                {
                    path: 'AddMain',
                    component: () => import('@oa/views/layout/components/noSlide_Main.vue'),
                    children:[
                        {
                            name: '新建公告',
                            path: 'addNotice',

                            component: () => import('@oa/views/notice/addNotice.vue'),
                        },
                        {
                            name: '新建日报',
                            path: 'addDaily',

                            component: () => import('@oa/views/dailyReport/addDaily.vue'),
                        },
                        {
                            name: '新建周报',
                            path: 'addWeekly',

                            component: () => import('@oa/views/dailyReport/addWeekly.vue'),
                        },
                        {
                            name: '新建发文',
                            path: 'addDocument',

                            component: () => import('@oa/views/document/addDocument.vue'),
                        },
                    ]
                },
                        {
                            name: '新增出库',
                            path: 'pushOut',

                            component: () => import('@oa/views/supplies/PushOut.vue')
                        },
                        {
                            name: '新增入库',
                            path: 'pushIn',

                            component: () => import('@oa/views/supplies/PushIn.vue')
                        },

                    ]
                },

        {
            path: '/*',
            redirect: '/main',
        },
    ]
});
