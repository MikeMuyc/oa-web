<template>
    <div id="receiveDetail" class="addModule">
        <div class="content">
            <div class="backLine">
                <div class="left" @click="$router.push({name:'收文管理'})">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">
                    <div class="pmbtn" style="margin-right: 20px">上一封</div>
                    <div class="pmbtn primary" >下一封</div>
                </div>
            </div>
            <div class="whiteSpace">
                <div class="title">收文详情</div>
                <div class="label">公文标题</div>
                <div class="inputBox">{{detailObj.theme}}</div>

                <div class="label">收文单位</div>
                <div class="inputBox">{{detailObj.receiverUnit}}</div>

                <div class="label">正文</div>
                <div class="docTable">
                    <div class="head">
                        <div class="cell" style="flex: 3">发文字号</div>
                        <div class="cell" style="flex: 3">文件名称</div>
                        <div class="cell" style="flex: 2">文件大小</div>
                        <div class="cell" style="flex: 1;justify-content: center">操作</div>
                    </div>
                    <div class="line">
                        <div class="cell" style="flex: 3"></div>
                        <div class="cell" style="flex: 3"></div>
                        <div class="cell" style="flex: 2"></div>
                        <div class="cell" style="flex: 1;justify-content: center">

                        </div>
                    </div>
                </div>

                <div class="label">附件</div>
                <div class="fileLine">
                    <em>2020年xxxx工作指示.doc</em>
                    <div class="fontBtn">下载</div>
                </div>
                <div class="fileLine">
                    <em>2020年xxxx工作指示.doc</em>
                    <div class="fontBtn">下载</div>
                </div>
                <div class="ctrlLine">

                    <div class="pmbtn primary" style="margin-right: 20px">签收</div>
                    <div class="pmbtn" >转为审批</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {Spin, Select, Option, Icon, Page, CheckboxGroup, RadioGroup, Radio, Checkbox} from 'view-design'
    import * as api from '@oa/api/document'
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


    export default class receiveDetail extends Vue {

        detailObj:any = {
            "id": "5fb22964256b7e5dac54eaa1",
            "theme": "test1",
            "number": "202011160001",
            "fileId": "123",
            "attachmentId": [
                "102"
            ],
            "senderUnit": "sucsoft",
            "sendTime": "2020-11-16 15:25",
            "receiverUnit": "水文局",
            "receiveTime": "2020-11-16 15:31",
            "received": true,
            "degree": 0
        }
        mounted(): void {
            console.log(this.$route.params);
        }

    }

</script>

<style lang="scss" scoped>
    .docTable{
        border: 1px solid $border-color;
        margin-bottom: 32px;
        .head{
            background: #FAFAFA;
            border-bottom: 1px solid $border-color;
            height: 48px;
            display: flex;
            .cell:last-child{
                border-right: 0;
            }
        }
        .line{
            height: 48px;
            display: flex;
            .cell:last-child{
                border-right: 0;
            }
        }
        .cell{
            border-right: 1px solid $border-color;
            display: flex;
            align-items: center;
            padding: 0 30px;
        }
    }
    .fileLine{
        display: flex;
        height: 40px;
        align-items: center;
        margin-bottom: 10px;
        em{
            font-style: normal;
            display: inline-block;
            width: 300px;
            margin-right: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .ctrlLine{
        display: flex;
        justify-content: center;
        margin-top: 80px;
    }
</style>

