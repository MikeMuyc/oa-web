<template>
    <div id="sentList" ref="viewbox">
        <div class="searchLine" ref="searchLine">
            <div class="left">
                <div class="tabSelect" style="margin-right: 20px">
                    <div class="option" :class="{active:type === 0}" @click="type = 0">全部</div>
                    <div class="option" :class="{active:type === 1}" @click="type = 1">未被签收</div>
                    <div class="option" :class="{active:type === 2}" @click="type = 2">已被签收</div>
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
                    :data="orderList"
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
                        prop="title"
                        label="公文标题"
                        min-width="200px"
                >
                </el-table-column>

                <el-table-column
                        prop="department"
                        label="收文单位"
                        min-width="140px"
                        show-overflow-tooltip
                >
                </el-table-column>

                <el-table-column
                        prop="sentime"
                        label="发文时间"
                        min-width="170px"
                >
                </el-table-column>
                <el-table-column
                        prop="receiveTime"
                        label="签收时间"
                        min-width="170px"
                >
                </el-table-column>

                <el-table-column
                        label="操作"
                        align="center"
                        width="150px"
                >
                    <template slot-scope="{row,$index}">
                        <font class="fontBtn">查看</font>
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

        orderList: any = [
            {
                title: '省厅1号文件',
                sentime: '2020-5-3 19:32:32',
                receiveTime: '2020-5-4 19:11:12',
                department: '宣发部',
                status: '0',
            },
            {
                title: '省厅2号文件',
                sentime: '2020-5-3 19:32:32',
                receiveTime: '2020-5-14 14:13:12',
                department: '组织部',
                status: '1',
            },
        ];

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
            })
        }

        getPage(page?: number) {
            this.pageNum = page || 1;
            console.log(page)
        }
    }

</script>

<style lang="scss" scoped>
    #sentList {
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

