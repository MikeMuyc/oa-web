<template>
    <div id="receiveList" ref="viewbox">
        <div class="searchLine" ref="searchLine">
            <div class="left">
                <div class="tabSelect" style="margin-right: 20px">
                    <div class="option" :class="{active:type === 0}" @click="typeChange(0)">全部</div>
                    <div class="option" :class="{active:type === 1}" @click="typeChange(1)">待签收</div>
                    <div class="option" :class="{active:type === 2}" @click="typeChange(2)">已签收</div>
                </div>

            </div>
            <div class="right">
                <normalInput placeholder="请输入关键字" style="margin-right: 10px;width: 180px"></normalInput>
                <div class="pmbtn primary">
                    <i class="iconfont iconsousuo"></i>查询
                </div>
            </div>
        </div>

        <div class="tableBox">
            <el-table
                    class="dailyTable"
                    :data="documentList"
                    :height="formHeight"
            >
                <template slot="empty">
                    <img src="@oa/assets/暂无数据.png">
                    <br>
                    暂无内容
                </template>
                <el-table-column
                        prop=""
                        label="序号"
                        align="center"
                        width="100px"
                >
                    <template slot-scope="{row,$index}">
                        {{(pageNum-1)*pageSize + $index + 1}}
                    </template>
                </el-table-column>
                <el-table-column
                        prop="theme"
                        label="公文标题"
                        min-width="200px"
                >
                </el-table-column>

                <el-table-column
                        prop="senderUnit"
                        label="发文单位"
                        min-width="140px"
                        show-overflow-tooltip
                >
                </el-table-column>

                <el-table-column
                        prop="sendTime"
                        label="发文时间"
                        min-width="170px"
                >
                </el-table-column>
                <el-table-column
                        prop="received"
                        label="文件状态"
                        min-width="140px"
                >
                    <template slot-scope="{row,$index}">
                        <font v-if="!row.received" class="fontBtn-warning">待签收</font>
                        <font v-if="row.received" class="fontBtn">已签收</font>
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作"
                        align="center"
                        width="150px"
                >
                    <template slot-scope="{row,$index}">
                        <font class="fontBtn" @click="toDetail(row)">查看</font>
                    </template>
                </el-table-column>
            </el-table>
        </div>

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


    export default class receiveList extends Vue {

        documentList: Array<any> = [];

        type: number|string = 0;

        formHeight: number = 600;
        pageNum: number = 1
        pageSize: number = 10
        totalElements: number = 20

        setPagesize() {
            let refs: any = this.$refs;
            let maxHeight = refs.viewbox.clientHeight;
            let searchline = refs.searchLine.clientHeight;
            let pageBottom = refs.pageBottom.clientHeight;
            this.formHeight = maxHeight - searchline - pageBottom;
            //表头高度49px，每一列高度48px;
            this.pageSize = Math.floor((this.formHeight - 49) / 48);
        }

        mounted(): void {
            this.$nextTick(() => {
                this.setPagesize();
                this.getDocumentList();
            })
        }

        async getDocumentList(){
            let obj:any = {
                pageNum:this.pageNum,
                pageSize:this.pageSize,
            }
            if(this.type === 1){
                obj.received = false;
            }
            else if(this.type === 2){
                obj.received = true;
            }
            try {
                let {data:{content,totalElements}} = await api.getDocumentList(obj);
                this.documentList = content;
                this.totalElements = totalElements;
            }
            catch (e) {

            }
        }
        getPage(page?: number) {
            this.pageNum = page || 1;
            this.getDocumentList();
        }

        typeChange(num:number){
            this.type = num;
            this.getPage();
        }
        toDetail(row:any){
            this.$router.push({name:'收文详情',params:row})
        }
    }

</script>

<style lang="scss" scoped>
    #receiveList {
        height: 100%;
        overflow: hidden;

        .dailyTable {
            width: 100%;
            flex: none
        }

        .tableBox {
            overflow: hidden;
            display: flex;
            width: 100%;
        }
    }
</style>

