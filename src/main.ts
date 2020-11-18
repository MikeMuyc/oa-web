import Vue from 'vue'

import App from './App.vue'
import router from './route'
import store from './stores'

import './utils/class-component-hooks'
import plugin from "./utils/suc-plugin";
Vue.use(plugin);

import { utils } from "@suc/ui/index";

import VueOl from '@suc/monch';


import authox from '@suc/authox/plugins/authox-vue';
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
import axios from 'axios'

Vue.use(utils, router);

Vue.use(authox, store);

Vue.use(VueOl);




if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "./apw";
    Vue.prototype.downloadURL = "http://172.18.13.99:6085";
    Vue.prototype.$uploadUrl = "/api"
}else{
    Vue.prototype.downloadURL = ""
    Vue.prototype.$uploadUrl = ""
}


Vue.config.productionTip = false;


Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
