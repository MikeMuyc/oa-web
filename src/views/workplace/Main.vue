<template>
    <div class="workplace">
        <div class="d-flex jc-between box" >
            <div class="section ">
                <div class="section-title">
                    <span class="title flex-1">待我审批</span>
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
                    <span class="title flex-1">任务督办</span>
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
                    <span class="title flex-1">文件收阅</span>
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
                    <span class="title flex-1">通知公告</span>
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
    import {Vue, Component} from "vue-property-decorator";


    @Component({})
    export default class workplaceMain extends Vue {
    }
</script>

<style lang="scss" scoped>
   
    .workplace{
        width:100%;
        height:calc(100% - 40px);
        background-image: url('../../assets/section/workplacebg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-right:52px;
        div:nth-child(1){
            
            .section:nth-child(1){
                border-bottom:2px solid #eee;
            }
            .section:nth-child(2){
                border-bottom:2px solid #eee;
            }
        }
       
        .section{
            flex:1;
            width:50%;
            flex-shrink:0;
            flex-wrap: wrap;
            padding:20px 32px;
            height:370px;
         
            &:nth-child(2n){
                border-left:2px solid #eee;
            }
            .section-content{
                margin-top:26px;
            }
            
            .grey-text{
                font-size: 14px;
                font-weight: 400;
                color: #8C8C8C;
            }
            .list-item{
                margin-bottom:10px;
                .list-circle{
                    width: 12px;
                    height: 12px;
                    border: 1px solid #070F3A;
                    border-radius: 50%;
                    margin-right:5px;
                }
                .list-title{
                    font-size: 14px;
                    font-weight: 500;
                    color: #262626;
    
                }
            }
        }
        .section-title{
            height:56px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 56px;
            font-size:16px;
            background-image: url('../../assets/section/titlebg.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            padding:0 16px 0 48px;
            display:flex;
            justify-content: space-between;
            span:nth-child(1){
                font-size: 20px;
                color: #890A03;
                &+span{
                    font-weight:600;
                }
            }
        }
    }

</style>
