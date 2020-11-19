<template>
    <div id="approvalList" ref="viewbox">
        <div class="searchLine" ref="searchLine">
            <div class="left">
                <div class="tabSelect" style="margin-right: 20px">
                    <div class="option" :class="{active:type === 0}" @click="type = 0">全部</div>
                    <div class="option" :class="{active:type === 1}" @click="type = 1">待我审批</div>
                    <div class="option" :class="{active:type === 2}" @click="type = 2">我已审批</div>
                    <div class="option" :class="{active:type === 3}" @click="type = 3">我发起的</div>
                    <div class="option" :class="{active:type === 4}" @click="type = 4">抄送我的</div>
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
                        prop="num"
                        label="文件编号"
                        width="140px"
                        show-overflow-tooltip
                >
                </el-table-column>

                <el-table-column
                        prop="title"
                        label="标题"
                        min-width="220px"
                        show-overflow-tooltip
                >
                </el-table-column>

                <el-table-column
                        prop="man"
                        label="申请人"
                        width="150px"
                        align="center"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop=""
                        label=""
                        align="center"
                        width="60px"
                >
                    <template slot-scope="{row,$index}">
                        <i v-if="row.dange===1" class="iconfont iconyiban"></i>
                        <i v-if="row.dange===2" class="iconfont iconjiaji"></i>
                        <i v-if="row.dange===3" class="iconfont iconteji"></i>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="sendTime"
                        label="申请时间"
                        width="200px"
                >
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态"
                        width="150px"
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
                num: 'NF202090801',
                title: '标题标题标题标题标题标题标题标题标题',
                man: '李四',
                sendTime: '2020-09-03  20:00:12',
                status: '0',
                dange:1,
            },
            {
                num: 'NF202090801',
                title: '标题标题标题标题标题标题标题标题标题',
                man: '李四',
                sendTime: '2020-09-03  20:00:12',
                status: '0',
                dange:2,
            },
            {
                num: 'NF202090801',
                title: '标题标题标题标题标题标题标题标题标题',
                man: '李四',
                sendTime: '2020-09-03  20:00:12',
                status: '0',
                dange:3,
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
    #approvalList {
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

        .iconyiban{
            @include base-color();
        }
        .iconjiaji{
            color: $warning-color;
        }
        .iconteji{
            color: $error-color;
        }
    }
</style>

