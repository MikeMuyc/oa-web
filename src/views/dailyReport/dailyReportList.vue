<template>
    <div id="dailyReport" ref="viewbox">
        <div class="searchLine" ref="searchLine">
            <div class="left">
                <div class="tabSelect" style="margin-right: 20px">
                    <div class="option" :class="{active:type === 1}" @click="type = 1">日报</div>
                    <div class="option" :class="{active:type === 2}" @click="type = 2">周报</div>
                </div>
                <normalInput placeholder="请输入关键字" style="margin-right: 10px;width: 180px"></normalInput>
                <div class="pmbtn primary">
                    <i class="iconfont iconsousuo"></i>查询
                </div>
            </div>
            <div class="right">
                <div class="pmbtn primary" @click="$router.push({name:'新建周报'})">
                    <i class="iconfont iconxinzeng"></i>新建周报
                </div>
                <div class="pmbtn primary" @click="$router.push({name:'新建日报'})"
                     style="margin-left: 20px">
                    <i class="iconfont iconxinzeng"></i>新建日报
                </div>
            </div>
        </div>

        <div class="tableBox">
            <transition name="leftSlide">
                <el-table
                        class="dailyTable"
                        v-show="type === 1"
                        :data="orderList"
                        :height="formHeight"
                >
                    <template slot="empty">
                        <img src="@oa/assets/暂无数据.png">
                        <br>
                        暂无内容
                    </template>
                    <el-table-column
                            prop="time"
                            label="填报时间"
                            min-width="170px"

                    >
                    </el-table-column>

                    <el-table-column
                            prop="reporter"
                            label="填报人"
                            min-width="140px"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="morning"
                            label="上午"
                            min-width="240px"
                            show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                            prop="afternoon"
                            label="下午"
                            min-width="240px"
                            show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            align="center"
                            width="150px"
                    >
                        <template slot-scope="{row,$index}">
                            <font class="fontBtn">详情</font>
                        </template>
                    </el-table-column>
                </el-table>
            </transition>

            <transition name="rightSlide">
                <el-table
                        class="dailyTable"
                        v-show="type === 2"
                        :data="orderList2"
                        :height="formHeight"
                >
                    <template slot="empty">
                        <img src="@oa/assets/暂无数据.png">
                        <br>
                        暂无内容
                    </template>
                    <el-table-column
                            prop="time"
                            label="填报时间"
                            min-width="170px"

                    >
                    </el-table-column>

                    <el-table-column
                            prop="department"
                            label="填报部门"
                            min-width="160px"
                    >
                    </el-table-column>

                    <el-table-column
                            prop="lastweek"
                            label="上周已完成"
                            min-width="180px"
                            show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                            prop="thisweek"
                            label="本周要完成"
                            min-width="180px"
                            show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                            prop="nowpush"
                            label="正在推进"
                            min-width="180px"
                            show-overflow-tooltip
                    >
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            align="center"
                            width="150px"
                    >
                        <template slot-scope="{row,$index}">
                            <font class="fontBtn">详情</font>
                        </template>
                    </el-table-column>
                </el-table>
            </transition>
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
                reporter: '张娜拉',
                time: '2020-5-3 19:32:32',
                morning: '调研',
                afternoon: '-',
            },
            {
                reporter: '张文',
                time: '2020-5-13 19:33:12',
                morning: '实地勘察',
                afternoon: '写报告',
            },
        ];
        orderList2: any = [
            {
                department: '信息部',
                time: '2020-5-3 19:32:32',
                lastweek: '调研',
                thisweek: '-',
                nowpush: '--',
            },
            {
                department: '人事部',
                time: '2020-5-13 19:33:12',
                lastweek: '调研',
                thisweek: '面试',
                nowpush: '筛选人员',
            },
        ];
        type: number = 1;

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
    #dailyReport {
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

