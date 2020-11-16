<template>
    <div class="app_main">
        <NavSider/>
        <div class="main-content ">
            <NavBread/>
            <vue-perfect-scrollbar class="routerView">
                <router-view class=""></router-view>
            </vue-perfect-scrollbar>

        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import NavSider from './NavSider.vue'
    import NavBread from './NavBread.vue';

    @Component({components: {NavSider, NavBread}})
    export default class appMain extends Vue {
    }
</script>
<style lang="scss" >
    .app_main {
        padding-top: 30px;
        width: 100%;
        height: calc(100% - 56px);
        background-color: #fafafa;
        background-image: url('../../../assets/content/contentbg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;

        .ol-mouse-position {
            bottom: 8px;
            top: auto;
        }

        .ivu-layout-sider {
            background: none;
        }
        .ivu-layout {
            background: none;
        }

        .ivu-menu-light {
            background: none;
        }

        .ivu-menu-vertical.ivu-menu-light:after {
            content: none;
        }


        .main-content{
            height: 100%;
            width: calc(100% - 200px);
            padding: 0 24px 24px 24px;
        }
        .routerView{
            height: calc(100% - 60px);
            background-color: #fff;
            padding-right: 15px;
        }
    }
</style>
