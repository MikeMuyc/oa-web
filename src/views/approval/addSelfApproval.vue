<template>
    <div id="addSelfApproval" class="addModule">
        <div class="content">
            <div class="backLine">
                <div class="left" @click="$router.go(-1)">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">

                    <div class="pmbtn primary" >
                        <i class="iconfont iconfabu"></i>提交
                    </div>

                </div>
            </div>
            <vue-perfect-scrollbar class="whiteSpace">
                <div class="title">新建自办件审批</div>
                <div class="label">文件名称</div>
                <normalInput class="input" placeholder="请输入文件名称"></normalInput>

                <div class="label">关联审批</div>
                <normalInput class="input" placeholder="请选择关联审批文件"></normalInput>

                <div class="label">文件详情</div>
                <div class="graybox">
                    <div class="oaline">
                        <div class="oalabel">抬头</div>
                        <div class="flex">
                            <normalInput placeholder="请输入抬头" style="width: 300px"></normalInput>
                        </div>
                    </div>
                    <div class="oaline">
                        <div class="oalabel">文件正文</div>
                        <div class="flex">
                            <textarea style="height: 100px;width: 100%" placeholder="请输入文件正文"></textarea>
                        </div>
                    </div>
                    <div class="oaline">
                        <div class="oalabel">落款</div>
                        <div class="flex">
                            <normalInput placeholder="请输入落款" style="width: 300px"></normalInput>
                        </div>
                    </div>
                    <div class="oaline">
                        <div class="oalabel">日期</div>
                        <div class="flex">
                            <DatePicker v-model="time1" type="date" placeholder="选择日报所属日期" style="width: 300px"></DatePicker>
                        </div>
                    </div>
                </div>

                <div class="label">附件</div>
                <div class="pmbtn change" style="margin-bottom: 32px">上传</div>

                <div class="label">审批流程</div>
                <div class="loopbox">
                    <div class="loopline">
                        <div class="left"></div>
                        <div class="right">

                        </div>
                    </div>

                </div>
            </vue-perfect-scrollbar>
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


    export default class addSelfApproval extends Vue {

        time1:string = '';
        mounted(): void {

        }


    }

</script>

<style lang="scss" scoped>
    .graybox{
        background: #FAFAFA;
        border: 1px solid #D8DEE5;
        border-radius: 2px;
        padding: 20px;
        margin-bottom: 32px;
    }
    .oaline {
        width: 100%;
        display: flex;
        margin-bottom: 15px;

        .oalabel {
            padding-right: 24px;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
            height: 32px;
            flex:none;
            white-space: nowrap;
            width: 104px;
        }

        .flex {
            flex:1;
            display: inline-flex;
            align-items: center;

            &.receive {
                align-items: baseline;
                color: $second-font-color;

                em, i {
                    color: $error-color;
                }

                em {
                    font-size: 24px;
                    line-height: 30px;
                }
            }

            .disabledbox {
                width: 100%;
                height: 36px;
                background-color: #f8f9fc;
                border-radius: 4px;
                border: solid 1px #dde4eb;
                color: $second-font-color;
                padding: 0 10px;
                display: inline-flex;
                align-items: center;

                &.red {
                    color: $error-color;
                }
            }
        }
    }

    .loopbox{
        display: flex;
        margin-bottom: 32px;
        .loopline{
            display: flex;
            .left{
                width: 40px;
            }
            .right{
                flex: 1;
                display: flex;
                justify-content: space-between;

            }
        }


    }
</style>

