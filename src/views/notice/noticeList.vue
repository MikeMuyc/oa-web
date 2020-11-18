<template>
    <div id="noticeList" ref="viewbox">
        <div class="searchLine" ref="searchLine">
            <div class="left">
                <div class="tabSelect" style="margin-right: 20px">
                    <div class="option" :class="{active:read === null}" @click="tabSelect(null)">全部</div>
                    <div class="option" :class="{active:read === false}" @click="tabSelect(false)">未读</div>
                    <div class="option" :class="{active:read === true}" @click="tabSelect(true)">已读</div>
                </div>

                <div class="pmbtn change" @click="setRead">标记为已读</div>
            </div>
            <div class="right">
                <normalInput v-model="keyword" placeholder="请输入关键字" style="margin-right: 10px"></normalInput>
                <div class="pmbtn primary" @click="getPage()">
                    <i class="iconfont iconsousuo"></i>查询
                </div>
            </div>
        </div>
        <el-table
                v-loading="loading"
                :data="noticeList"
                :height="formHeight"
                @selection-change="handleSelectionChange"
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
        checkList: any = [];

        formHeight: number = 600;
        pageNum:number = 1
        pageSize:number =  10
        totalElements:number =  20
        read:any = null;
        keyword:string = '';
        loading:boolean = false;
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
                this.reset();
            })
        }

        async getNoticeList(){
            this.loading = true;
            try {
                let {data:{content,totalElements}} = await api.getNoticeList({
                    pageNum:this.pageNum,
                    pageSize:this.pageSize,
                    read:this.read,
                    keyword:this.keyword,
                });
                this.noticeList = content;
                this.totalElements = totalElements;
            }
            catch (e) {
                this.$message.error(`获取列表失败！`)
                console.log(e)
            }
            this.loading = false;
        }
        getPage(page?:number) {
            this.pageNum = page || 1;
            this.getNoticeList();
        }
        reset(){
            this.read = null;
            this.keyword = '';
            this.getPage();
        }
        cutDetail(detail:string){
            return detail.slice(0,20)
        }
        handleSelectionChange(val:Array<any>){
            this.checkList = [];
            val.forEach(item =>{
                this.checkList.push(item.id)
            })
        }
        tabSelect(val:any){
            this.read = val;
            this.getPage();
        }
        async setRead(){
            if(this.checkList.length > 0){
                try {
                    await api.setRead(this.checkList);
                    this.$message.success(`已将选中的公告标记为“已读”！`);
                    this.reset();
                }catch (e) {
                    this.$message.error(`操作失败！`)
                    console.log(e)
                }
            }
            else{
                this.$message.warning(`请至少勾选一条公告！`)
            }
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
            margin-right: 9px;
            margin-left: 1px;
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

