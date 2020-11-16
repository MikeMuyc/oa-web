<template>
    <div class="app_main">
        <NavSider/>
        <div class="main-content ">
            <NavBread>
                <div slot="rightSide" class="pmbtn primary" v-if="routeName === '公告列表'">新增公告</div>
                <div slot="rightSide"  v-if="routeName === '通讯录'">
                    <div class="pmbtn primary" style="margin-right:10px">
                        <span class="iconfont iconxinzeng" style="margin-right:5px"></span>
                        新增人员信息
                    </div>
                    <div class="pmbtn primary">
                        <span class="iconfont iconshuaxin" style="margin-right:5px"></span>
                        机构信息更新
                    </div>
                </div>
            </NavBread>
            <vue-perfect-scrollbar class="routerView">
                <router-view class=""></router-view>
            </vue-perfect-scrollbar>

        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import NavSider from './NavSider.vue'


    @Component({components: {NavSider}})
    export default class appMain extends Vue {
        routeName:string = this.$route.name;
        @Watch("$route")
        private handleRouteChange(): void {
            this.routeName = this.$route.name;
        }
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
            // padding-right: 15px;
        }
    }
</style>
