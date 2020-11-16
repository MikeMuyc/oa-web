<template>
    <div id="addNotice" >
        <div class="content">
            <div class="backLine">
                <div class="left" @click="$router.go(-1)">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">

                    <div class="pmbtn primary" >
                        <i class="iconfont iconfabu"></i>发布
                    </div>

                </div>
            </div>
            <div class="whiteSpace">
                <div class="title">新建通知公告</div>
                <div class="label">收件人</div>
                <normalInput class="input" placeholder="请选择部门、人员"></normalInput>

                <div class="label">标题</div>
                <normalInput class="input" placeholder="请输入标题"></normalInput>

                <div class="label">消息详情</div>
                <textarea class="input" style="height: 200px" placeholder="请输入消息详情"></textarea>

                <div class="label">附件</div>
                <div class="pmbtn" >上传</div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Spin, Select, Option, Icon, Page, CheckboxGroup, RadioGroup, Radio, Checkbox} from 'view-design'

    @Component({
        components: {

            Icon,
            Spin,
            Page,
            Select,
            Option,
            CheckboxGroup,
            RadioGroup,
            Radio,
            Checkbox,
        }
    })


    export default class orderList extends Vue {




        mounted(): void {

        }


    }

</script>

<style lang="scss" scoped>
    #addNotice{
        height: 100%;
        display: flex;
        justify-content: center;
        .backLine{
            height: 60px;
            align-items: center;
            display: flex;
            justify-content: space-between;

            .left {
                .iconfont{
                    margin-right: 15px;
                }
                display: inline-flex;
                font-size: 16px;
                cursor: pointer;
            }
            .right{
                display: inline-flex;
            }
        }
        .content{
            width: 960px;
            padding-bottom:30px;
            .whiteSpace {
                background-color: #fff;
                height: calc(100% - 60px);
                padding: 32px;
                .title{
                    font-size: 20px;
                    height: 20px;
                    line-height: 20px;
                    margin-bottom: 32px;
                }
                .label{
                    margin-bottom: 12px;
                }
                .input{
                    width: 100%;
                    margin-bottom: 32px;
                }
            }

        }

    }
</style>

