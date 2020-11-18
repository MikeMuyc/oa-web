<template>
    <div id="addDocument" class="addModule">
        <div class="content">
            <div class="backLine">
                <div class="left"  @click="$router.push({name:'发文管理'})">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">
                    <div class="pmbtn" style="margin-right: 20px">
                        继续创建
                    </div>
                    <div class="pmbtn primary" >
                        <i class="iconfont iconfabu"></i>发布
                    </div>

                </div>
            </div>
            <div class="whiteSpace">
                <div class="title">新建发文</div>
                <div class="label">公文标题</div>
                <normalInput class="input" placeholder="请输入标题"></normalInput>

                <div class="label">收文单位</div>
                <normalInput class="input" placeholder="请输入收文单位"></normalInput>

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
                            <label for="upload1" class="fontBtn">上传</label>
                            <input type="file" id="upload1" @change="uploadFile1">
                        </div>
                    </div>
                </div>

                <div class="label">附件</div>
                <label for="upload2" class="pmbtn change" >上传</label>
                <input type="file" id="upload2" @change="uploadFile2">
            </div>
        </div>

    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
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


    export default class addDocument extends Vue {


        mounted(): void {

        }

        async uploadFile1(e:any){
            let fd = new FormData();
            let type:string = `doc,docx`;
            let houzhui:string = e.target.files[0].name.split('.')[1];
            let bool2:boolean = type.indexOf(houzhui) > -1;
            if (!bool2) {
                this.$message({
                    showClose: true,
                    message: `文件格式错误！`,
                    type: 'error'
                });
            } else {
                fd.append("files ", e.target.files[0]);

                try {
                    let data:any = await api.upload(fd);
                    console.log(data)
                    this.$message.success(`上传成功！`)
                } catch (e) {
                    this.$message.error(`上传失败!`)
                }

            }
        }
        async uploadFile2(e:any){
            let fd = new FormData();
            let type:string = `doc,docx`;
            let houzhui:string = e.target.files[0].name.split('.')[1];
            let bool2:boolean = type.indexOf(houzhui) > -1;
            if (!bool2) {
                this.$message({
                    showClose: true,
                    message: `文件格式错误！`,
                    type: 'error'
                });
            } else {
                fd.append("files ", e.target.files[0]);

                try {
                    let data:any = await api.upload(fd);
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
</style>

