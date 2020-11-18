<template>
    <div id="noticeList" ref="viewbox">
        <div class="searchLine" ref="searchLine">
            <div class="left"></div>
            <div class="right">
                <normalInput placeholder="请输入关键字" style="margin-right: 10px"></normalInput>
                <div class="pmbtn primary">
                    <i class="iconfont iconsousuo"></i>查询
                </div>
            </div>
        </div>
        <el-table
                :data="noticeList"
                :height="formHeight"
        >
            <template slot="empty" >
                <img src="@oa/assets/暂无数据.png">
                <br>
                暂无内容
            </template>
            <el-table-column
                    type="selection"
                    label=""
                    width="80px"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="主题"
                    min-width="300px"
                    show-overflow-tooltip
            >
                <template slot-scope="{row,$index}">
                    <i v-if="row.read" class="iconfont iconyidu1"></i>
                    <i v-else class="iconfont iconweidu1"></i>
                    <em v-if="row.read" class="read"> 【{{row.title}}】{{cutDetail(row.detail)}}</em>
                    <em v-else class="unread"> 【{{row.title}}】{{cutDetail(row.detail)}}</em>
                </template>
            </el-table-column>

            <el-table-column
                    prop="createTime"
                    label="时间"
                    min-width="170px"
            >
            </el-table-column>
            <el-table-column
                    label="操作"
                    align="center"
                    width="150px"
            >
                <template slot-scope="{row,$index}">
                    <font class="fontBtn">详情</font>
                    <font class="fontBtn-delete">删除</font>
                </template>
            </el-table-column>
        </el-table>
        <div class="pageBottom" ref="pageBottom">
            <Page show-elevator show-total :page-size="pageSize" :current="pageNum"
                  :total="totalElements"
                  @on-change="getPage"/>
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


    export default class noticeList extends Vue {

        noticeList: any = [];

        formHeight: number = 600;
        pageNum:number = 1
        pageSize:number =  10
        totalElements:number =  20

        setPagesize(){
            let refs: any = this.$refs;
            let maxHeight = refs.viewbox.clientHeight;
            let searchline = refs.searchLine.clientHeight;
            let pageBottom = refs.pageBottom.clientHeight;
            this.formHeight = maxHeight - searchline  - pageBottom ;
            //表头高度49px，每一列高度48px;
            this.pageSize = Math.floor((this.formHeight - 49) / 48);
        }
        mounted(): void {
            this.$nextTick(()=>{
                this.setPagesize();
                this.getNoticeList();
            })
        }

        async getNoticeList(){

            try {
                let {data:{content,numberOfElements}} = await api.getNoticeList({
                    pageNum:this.pageNum,
                    pageSize:this.pageSize,
                });
                this.noticeList = content;
                this.totalElements = numberOfElements;
            }
            catch (e) {

            }
        }
        getPage(page?:number) {
            this.pageNum = page || 1;
            this.getNoticeList();
        }
        cutDetail(detail:string){
            return detail.slice(0,20)
        }
    }

</script>

<style lang="scss" scoped>
    #noticeList{
        height: 100%;
        .iconweidu1{
            @include base-color;
            font-size: 12px;
            margin-right: 10px;
        }
        .iconyidu1{
            font-size: 12px;
            margin-right: 10px;
        }
        .iconyidu1,.read{
            color: #595959;
            font-style: normal;
        }
        .unread{
            color:#262626;
            font-style: normal;
        }
    }
</style>

