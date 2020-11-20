<template>
    <div class="contentbox" ref="user">
        <div class="d-flex jc-between searchBar"
                style="margin: 20px 32px"
                ref="searchBar"
        >
            <div class="d-flex ai-center">
                <normalInput
                        v-model="supplyName"
                        placeholder="请输入办公用品名称"
                ></normalInput>
                <div
                        class="pmbtn primary"
                        style="margin-left: 10px"
                        @click="getSuppliesByName"
                >
                    <i class="iconfont iconsousuo"></i>查询
                </div>
            </div>
            <div>
                <div
                        class="pmbtn primary"
                        @click="$router.push({ name: '新增入库' })"
                >
					<span
                            class="iconfont iconxinzeng"
                            style="margin-right: 5px"
                    ></span>
                    新增入库
                </div>
                <div
                        class="pmbtn primary"
                        style="margin-left: 10px"
                        @click="$router.push({ name: '新增出库' })"
                >
					<span
                            class="iconfont iconxinzeng"
                            style="margin-right: 5px"
                    ></span>
                    新增出库
                </div>
            </div>
        </div>

        <!-- table -->
        <div class="item">
            <el-table
                    :data="tableData"
                    class="myWisdomTable"
                    align="center"
                    :height="formHeight"
            >
                <template slot="empty">
                    <img src="@oa/assets/暂无数据.png"/>
                    <br/>
                    暂无内容
                </template>
                <el-table-column
                        type="index"
                        label="序号"
                        width="150px"
                        align="center"
                >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="办公用品名称"
                        width="250px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="specification"
                        label="规格"
                        width="220px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="unit"
                        label="单位"
                        min-width="250px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="amount"
                        label="在库数量"
                        min-width="126px"
                >
                </el-table-column>

                <el-table-column label="操作" align="center" min-width="200px">
                    <template slot-scope="{ row, $index }">
                        <font class="fontBtn" @click="pushOut(row)">出库</font>
                        <font class="fontBtn" @click="pushIn(row)">入库</font>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pageBottom" ref="pageBottom">
                <Page
                        show-elevator
                        show-total
                        :page-size="pages.pageSize"
                        :current="pages.pageNum"
                        :total="pages.totalElements"
                        @on-change="getPage"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {supplyApi} from "@oa/api";

    @Component({})
    export default class workplaceMain extends Vue {
        no: boolean = false;
        model1: string = "";
        supplyName = "";
        supplyList = [];

        orderState: string = "";
        formHeight: number = 600;
        pages: any = {
            pageSize: 10,
            pageNum: 1,
            totalElements: 0,
        };
        tableData: any = [];



        orderStateSearch(item: any) {
            console.log(item);
        }

        getPage(page?: number) {
            this.pages.pageNum = page || 1;
            this.getSuppliesByName();
        }

        async getSuppliesByName() {
            const params = {
                name: this.supplyName,
                pageSize: this.pages.pageSize,
                pageNum: this.pages.pageNum,
            };
            try {
                let {data: {content, totalElements}} = {
                    "code": 200,
                    "message": "success",
                    "data": {
                        "content": [{
                            "id": "5fb604cc4ec26010e5c2683a",
                            "name": "尺子",
                            "specification": "7",
                            "unit": "个",
                            "amount": 7,
                            "createTime": "2020-11-20T00:00:00",
                            "updateTime": "2020-11-20T00:00:00",
                            "del": 0
                        }, {
                            "id": "5fb6244b79228254131e00c8",
                            "name": "橡皮2",
                            "specification": "string",
                            "unit": "string",
                            "amount": 1,
                            "createTime": "2020-11-19T15:52:19",
                            "updateTime": "2020-11-19T15:52:19",
                            "del": 0
                        }, {
                            "id": "5fb608391d21f045595ddf72",
                            "name": "橡皮1",
                            "specification": "string",
                            "unit": "string",
                            "amount": 3,
                            "createTime": "2020-11-19T15:52:19",
                            "updateTime": "2020-11-19T15:52:19",
                            "del": 0
                        }, {
                            "id": "5faccec22dbdfe5951ef9d8c",
                            "name": "橡皮",
                            "specification": "42",
                            "unit": "24",
                            "amount": 90,
                            "createTime": "2020-11-19T00:00:00",
                            "updateTime": "2020-11-19T00:00:00",
                            "del": 0
                        }, {
                            "id": "5fb604924ec26010e5c26838",
                            "name": "铅笔",
                            "specification": "",
                            "unit": "",
                            "amount": 112,
                            "createTime": "2020-11-19T00:00:00",
                            "updateTime": "2020-11-19T00:00:00",
                            "del": 0
                        }, {
                            "id": "5faccebb2dbdfe5951ef9d8a",
                            "name": "尺子",
                            "specification": "42",
                            "unit": "24",
                            "amount": 12,
                            "createTime": "2020-11-19T00:00:00",
                            "updateTime": "2020-11-19T00:00:00",
                            "del": 0
                        }, {
                            "id": "5facce622dbdfe5951ef9d86",
                            "name": "2",
                            "specification": "42",
                            "unit": "24",
                            "amount": 90,
                            "createTime": "2020-11-19T00:00:00",
                            "updateTime": "2020-11-19T00:00:00",
                            "del": 0
                        }, {
                            "id": "5fb4c45253c17f05a27e5833",
                            "name": "string",
                            "specification": "string",
                            "unit": "string",
                            "amount": 1,
                            "createTime": "2020-11-18T06:50:43.484",
                            "updateTime": "2020-11-18T06:50:43.484",
                            "del": 0
                        }, {
                            "id": "5fb4c776992e2b30c673ab0f",
                            "name": "string",
                            "specification": "string",
                            "unit": "string",
                            "amount": 1,
                            "createTime": "2020-11-18T06:50:31",
                            "updateTime": "2020-11-18T06:50:31",
                            "del": 0
                        }, {
                            "id": "5fb4c7cd45a2ed350900b75b",
                            "name": "string",
                            "specification": "string",
                            "unit": "string",
                            "amount": 1,
                            "createTime": "2020-11-18T06:50:31",
                            "updateTime": "2020-11-18T06:50:31",
                            "del": 0
                        }, {
                            "id": "5facceab2dbdfe5951ef9d88",
                            "name": "铅笔",
                            "specification": "42",
                            "unit": "24",
                            "amount": 67,
                            "createTime": "2020-11-18T00:00:00",
                            "updateTime": "2020-11-18T00:00:00",
                            "del": 0
                        }],
                        "pageable": {
                            "sort": {
                                "sorted": true,
                                "unsorted": false,
                                "empty": false
                            },
                            "offset": 0,
                            "pageNumber": 0,
                            "pageSize": 11,
                            "paged": true,
                            "unpaged": false
                        },
                        "last": false,
                        "totalPages": 2,
                        "totalElements": 20,
                        "number": 0,
                        "size": 11,
                        "sort": {
                            "sorted": true,
                            "unsorted": false,
                            "empty": false
                        },
                        "numberOfElements": 11,
                        "first": true,
                        "empty": false
                    }
                }
                this.tableData = content;
                this.pages.totalElements = totalElements;
            } catch (error) {
                console.log(error);
                this.$message.error(`获取列表失败！`);
            }
        }

        setPageSize() {
            let refs: any = this.$refs;
            let maxHeight = refs.user.clientHeight;
            let searchBarHight = refs.searchBar.clientHeight + 40; // 40px 上下margin
            let pageBottomHight = refs.pageBottom.clientHeight;
            this.formHeight = maxHeight - searchBarHight - pageBottomHight;
            this.pages.pageSize = Math.floor((this.formHeight - 49) / 48); //表头高度49px，每一行高度48px;
        }

        async pushOut(row: any) {
            const params = {
                flag: 1,
                amount: row.amount,
                unit: row.unit,
                supplies: row.id,
                operatorName: row.operatorName,
                operateTime: row.updateTime,
                specification: row.specification,
                relateUrl: "",
            };
            try {
                const res = await supplyApi.suppliesOut(params);
                this.$message({
                    message: res.message == "success" ? "出库成功!" : res.message,
                    type: "success",
                });
            } catch (error) {
                this.$message({
                    message: error.data.message,
                });
            }
        }

        async pushIn(row: any) {
            const params = {
                flag: 0,
                amount: row.amount,
                unit: row.unit,
                supplies: row.id,
                operatorName: row.operatorName,
                operateTime: row.updateTime,
                specification: row.specification,
                relateUrl: "",
            };
            try {
                const res = await supplyApi.suppliesOut(params);
                this.$message({
                    message: res.message == "success" ? "入库成功!" : res.message,
                    type: "success",
                });
            } catch (error) {
                this.$message({
                    message: error.data.message,
                });
            }
        }

        mounted(): void {
            this.$nextTick(() => {
                this.setPageSize();
                this.getSuppliesByName();
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>
