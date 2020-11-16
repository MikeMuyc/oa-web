<template>
    <Sider>
        <Menu active-name="1-1" width="auto">
            <MenuItem name="1-1" :to="{name:'OA工作台'}">
                <span class="iconfont iconshouye-xuanzhong" style="font-size:20px;margin-right:10px"></span>
                <span>OA工作台</span>
            </MenuItem>
            <MenuItem name="1-2" to="/main/workplaceIndex">
                <span class="iconfont icongongzuoshenpi" style="font-size:20px;margin-right:10px"></span>
                <span>工作审批</span>
            </MenuItem>
            <MenuItem name="1-3" :to="{name:'公告列表'}">
                <span class="iconfont icontongzhigonggao" style="font-size:20px;margin-right:10px"></span>
                <span>通知公告</span>
            </MenuItem>
            <MenuItem name="1-4" :to="{name:'日报周报'}">
                <span class="iconfont iconzhoubaoribao" style="font-size:20px;margin-right:10px"></span>
                <span>日报周报</span>
            </MenuItem>
            <MenuItem name="1-5" to="/">
                <span class="iconfont iconrenwuduban" style="font-size:20px;margin-right:10px"></span>
                <span>任务督办</span>
            </MenuItem>

            <Submenu name="1-6">
                <template slot="title">
                    <span class="iconfont iconshouwenwenjianxiang" style="font-size:20px;margin-right:10px"></span>
                    公文收发
                </template>
                <MenuItem name="1-6-1">收文管理</MenuItem>
                <MenuItem name="1-6-2">发文管理</MenuItem>
            </Submenu>

            <MenuItem name="1-7" :to="{name:'通讯录'}">
                <span class="iconfont iconbianzu" style="font-size:20px;margin-right:10px"></span>
                <span>通讯录</span>
            </MenuItem>
            <MenuItem name="1-9" to="/main/">
                <span class="iconfont iconbangongyongpin" style="font-size:20px;margin-right:10px"></span>
                <span>办公用品管理</span>
            </MenuItem>
            <Submenu name="1-8">
                <template slot="title">
                    <span class="iconfont iconxitongguanli" style="font-size:20px;margin-right:10px"></span>
                    系统管理
                </template>
                <MenuItem name="1-8-1">权限管理</MenuItem>
                <MenuItem name="1-8-2">用户管理</MenuItem>
                <MenuItem name="1-8-3">流程管理</MenuItem>
            </Submenu>
            <MenuItem name="1-9" :to="{name:'标准页'}">
                <span>标准页</span>
            </MenuItem>
        </Menu>
    </Sider>
</template>

<script>
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class NavSider extends Vue {


    }
</script>

<style lang="scss" scoped>

</style>
