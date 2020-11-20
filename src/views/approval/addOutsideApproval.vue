<template>
    <div id="addOutsideApproval" class="addModule">
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
                <div class="title">新建外部来文审批</div>
                <div class="label">关联审批</div>
                <normalInput class="input" placeholder="请选择关联审批文件"></normalInput>

                <div class="label">公文标题</div>
                <normalInput class="input" placeholder="请输入公文标题"></normalInput>

                <div class="threeflex">
                    <div class="item">
                        <div class="label">正文文件名称</div>
                        <normalInput class="input" placeholder="请输入正文文件名称"></normalInput>
                    </div>
                    <div class="item">
                        <div class="label">发文字号</div>
                        <normalInput class="input" placeholder="请输入发文字号"></normalInput>
                    </div>
                    <div class="item">
                        <div class="label">来文单位</div>
                        <normalInput class="input" placeholder="请输入来文单位"></normalInput>
                    </div>
                </div>
                <div class="threeflex">
                    <div class="item">
                        <div class="label">正文文件</div>
                        <div class="pmbtn change" style="margin-bottom: 32px">上传</div>

                    </div>
                    <div class="item">
                        <div class="label">附件</div>
                        <div class="pmbtn change" style="margin-bottom: 32px">上传</div>

                    </div>
                </div>

                <div class="label">分文</div>
                <div class="threeflex">
                    <RadioGroup >
                        <Radio label="办公">
                            <span>办公</span>
                        </Radio>
                        <Radio label="阅文">

                            <span>阅文</span>
                        </Radio>
                    </RadioGroup>
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


    export default class addOutsideApproval extends Vue {



        time1:any = '';
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

    .threeflex{
        display: flex;
        justify-content: space-between;
        .item{
            width: 270px;
        }
    }
</style>

