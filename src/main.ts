import Vue from 'vue'

import App from './App.vue'
import router from './route'
import store from './stores'

import './utils/class-component-hooks'
import plugin from "./utils/suc-plugin";


import { utils } from "@suc/ui/index";
import authox from '@suc/authox/plugins/authox-vue';
import VueOl from '@suc/monch';



import '@suc/authox/styles/authox.scss';
import ViewUI from 'view-design'
// import "iview/dist/styles/iview.css";
import 'view-design/dist/styles/iview.css';


Vue.use(ViewUI);

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'
Vue.use(ElementUI);

import './styles/my-theme.less';
import './styles/index.scss';

Vue.use(utils, router);

Vue.use(authox, store);

Vue.use(VueOl);

Vue.use(plugin);


if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "./api";
    Vue.prototype.downloadURL = "http://172.18.13.99:6085";
    Vue.prototype.$uploadUrl = "/api"
}else{
    Vue.prototype.downloadURL = ""
    Vue.prototype.$uploadUrl = ""
}


Vue.config.productionTip = false;
import axios from 'axios'

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
