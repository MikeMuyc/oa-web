<template>
    <div id="addNotice" class="addModule">
        <div class="content">
            <div class="backLine">
                <div class="left" @click="$router.go(-1)">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">

                    <div class="pmbtn primary">
                        <i class="iconfont iconfabu"></i>发布
                    </div>

                </div>
            </div>
            <div class="whiteSpace">
                <div class="title">新建通知公告</div>
                <div class="label">收件人</div>
                <normalInput class="input" placeholder="请选择部门、人员"></normalInput>

                <div class="label">标题</div>
                <normalInput v-model="addObject.title" class="input" placeholder="请输入标题"></normalInput>

                <div class="label">消息详情</div>
                <textarea v-model="addObject.detail" class="input" style="height: 200px" placeholder="请输入消息详情"></textarea>

                <div class="label">附件</div>
                <label for="upload1" class="pmbtn change">上传</label>
                <input type="file" id="upload1" @change="uploadFile1"/>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Spin, Select, Option, Icon, Page, CheckboxGroup, RadioGroup, Radio, Checkbox} from 'view-design'
    import * as api from '@oa/api/notice'

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

        addObject: any = {
            "attachmentId": [],
            "detail": "",
            "recipientId": "",
            "title": ""
        };

        mounted(): void {

        }

        async uploadFile1(e: any) {
            let fd = new FormData();
            let type: string = `doc,docx`;
            let houzhui: string = e.target.files[0].name.split('.')[1];
            let bool2: boolean = type.indexOf(houzhui) > -1;
            if (!bool2) {
                this.$message({
                    showClose: true,
                    message: `文件格式错误！`,
                    type: 'error'
                });
            } else {
                fd.append("files ", e.target.files[0]);

                try {
                    let data: any = await api.upload(fd);
                    console.log(data)
                    this.$message.success(`上传成功！`)
                } catch (e) {
                    this.$message.error(`上传失败!`)
                }

            }
        }
    }

</script>

<style lang="scss" scoped>

</style>

