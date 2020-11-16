<template>
    <div class="workplace">
        <div class="d-flex jc-between box" >
            <div class="section ">
                <div class="section-title">
                    <span class="title flex-1" >待我审批</span>
                    <span class="more" style="">更多<i class="iconfont iconxiangzuo" style="margin-left:3px"></i></span>
                </div>
                <div class="section-content">
                    <div class="d-flex jc-between list-item" v-for="i in 5" :key="i">
                        <div class="d-flex flex-1 ai-center">
                            <span class="list-circle" style="margin-top:-3px"></span><span class="list-title">第二轮省直出版标准与要求</span>
                        </div>
                        <span class="grey-text">2020-01-22</span>
                    </div>
                </div>
            </div>
             <div class="section ">
                <div class="section-title">
                    <span class="title flex-1" >任务督办</span>
                    <span class="more" style="">更多<i class="iconfont iconxiangzuo" style="margin-left:3px"></i></span>
                </div>
                <div class="section-content">
                    <div class="d-flex jc-between list-item" v-for="i in 5" :key="i">
                        <div class="d-flex flex-1 ai-center">
                            <span class="list-circle" style="margin-top:-3px"></span><span class="list-title">第二轮省直出版标准与要求</span>
                        </div>
                        <span class="grey-text">2020-01-22</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex jc-between box">
             <div class="section">
                <div class="section-title">
                    <span class="title flex-1" >文件收阅</span>
                    <span class="more" style="">更多<i class="iconfont iconxiangzuo" style="margin-left:3px"></i></span>
                </div>
                <div class="section-content">
                    <div class="d-flex jc-between list-item" v-for="i in 5" :key="i">
                        <div class="d-flex flex-1 ai-center">
                            <span class="list-circle" style="margin-top:-3px"></span><span class="list-title">第二轮省直出版标准与要求</span>
                        </div>
                        <span class="grey-text">2020-01-22</span>
                    </div>
                </div>
            </div>
             <div class="section">
                <div class="section-title">
                    <span class="title flex-1" >通知公告</span>
                    <span class="more" style="">更多<i class="iconfont iconxiangzuo" style="margin-left:3px"></i></span>
                </div>
                <div class="section-content">
                    <div class="d-flex jc-between list-item" v-for="i in 5" :key="i">
                        <div class="d-flex flex-1 ai-center">
                            <span class="list-circle" style="margin-top:-3px"></span><span class="list-title">第二轮省直出版标准与要求</span>
                        </div>
                        <span class="grey-text">2020-01-22</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component({})
export default class workplaceMain extends Vue {}
</script>

<style lang="scss" scoped>

</style>