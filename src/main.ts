import Vue from 'vue'

import App from './App.vue'
import router from './route'
import store from './stores'

import './utils/class-component-hooks'
import plugin from "./utils/suc-plugin";
Vue.use(plugin);




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






Vue.config.productionTip = false;



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
