import Vue from 'vue'
import './styles/index.scss';
import App from './App.vue'
import router from './route'
import store from './stores'

import './utils/class-component-hooks'
import plugin from "./utils/suc-plugin";


import { utils } from "@suc/ui/index";
import authox from '@suc/authox/plugins/authox-vue';
import VueOl from '@suc/monch';


import './styles/index.scss';
import '@suc/authox/styles/authox.scss';
import ViewUI from 'view-design'
import "iview/dist/styles/iview.css";
import 'view-design/dist/styles/iview.css';
import {Menu,Icon} from 'view-design';

Vue.use(ViewUI);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



Vue.use(utils, router);

Vue.use(authox, store);

Vue.use(VueOl);

Vue.use(plugin);



Vue.config.productionTip = false;



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
