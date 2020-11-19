<template>
    <Sider>
        <Menu :active-name="routeName" :open-names="openNames" width="auto">
            <MenuItem name="OA工作台" :to="{name:'OA工作台'}">
                <span class="iconfont iconshouye-xuanzhong" style="font-size:20px;margin-right:10px"></span>
                <span>OA工作台</span>
            </MenuItem>
            <MenuItem name="工作审批" :to="{name:'工作审批'}">
                <span class="iconfont icongongzuoshenpi" style="font-size:20px;margin-right:10px"></span>
                <span>工作审批</span>
            </MenuItem>
            <MenuItem name="通知公告" :to="{name:'通知公告'}">
                <span class="iconfont icontongzhigonggao" style="font-size:20px;margin-right:10px"></span>
                <span>通知公告</span>
            </MenuItem>
            <MenuItem name="日报周报" :to="{name:'日报周报'}">
                <span class="iconfont iconzhoubaoribao" style="font-size:20px;margin-right:10px"></span>
                <span>日报周报</span>
            </MenuItem>
            <MenuItem name="任务督办" to="/">
                <span class="iconfont iconrenwuduban" style="font-size:20px;margin-right:10px"></span>
                <span>任务督办</span>
            </MenuItem>

            <Submenu name="公文收发">
                <template slot="title">
                    <span class="iconfont iconshouwenwenjianxiang" style="font-size:20px;margin-right:10px"></span>
                    公文收发
                </template>
                <MenuItem name="收文管理" :to="{name:'收文管理'}">收文管理</MenuItem>
                <MenuItem name="发文管理" :to="{name:'发文管理'}">发文管理</MenuItem>
            </Submenu>

            <MenuItem name="通讯录" :to="{name:'通讯录'}">
                <span class="iconfont iconbianzu" style="font-size:20px;margin-right:10px"></span>
                <span>通讯录</span>
            </MenuItem>
            <MenuItem name="办公用品管理" :to="{name:'办公用品管理'}">
                <span class="iconfont iconbangongyongpin" style="font-size:20px;margin-right:10px"></span>
                <span>办公用品管理</span>
            </MenuItem>
            <Submenu name="系统管理">
                <template slot="title">
                    <span class="iconfont iconxitongguanli" style="font-size:20px;margin-right:10px"></span>
                    系统管理
                </template>
                <MenuItem name="权限管理" to="/main/AppMain/authox">权限管理</MenuItem>
                <MenuItem name="用户管理" :to="{name:'用户管理'}">用户管理</MenuItem>
                <MenuItem name="流程管理" :to="{name:'流程管理'}">流程管理</MenuItem>
            </Submenu>
            <MenuItem name="标准页" :to="{name:'标准页'}">
                <span>标准页</span>
            </MenuItem>
        </Menu>
    </Sider>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";

    @Component
    export default class NavSider extends Vue {
        routeName:any = '';

        @Watch("$route")
        private handleRouteChange(): void {
            this.routeName = this.$route.name;
        }

        mounted(){
            this.routeName = this.$route.name;
        }
        get openNames(){
            let pname:string = this.$route.meta.pname;
            if(pname){
                return [pname]
            }
            else{
                return []
            }

        }
    }
</script>

<style lang="scss" >

    .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
        background: none;
    }
    .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
        background: none;
    }
    .ivu-menu-submenu .ivu-menu{
        padding-left: 14px;
    }
</style>
