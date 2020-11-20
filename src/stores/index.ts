import Vue from 'vue'
import Vuex, {ModuleTree} from 'vuex';

Vue.use(Vuex)




export default new Vuex.Store({
    state: {
        userInfo: null
    },

    mutations: {
        getUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {

    }
})
