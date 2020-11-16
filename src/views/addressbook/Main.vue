<template>
    <div class="addressbook">
        <div class="gap"></div>
        <div class="d-flex jc-between" style="margin:20px 32px;">
            <div class="flex-1">
                <Select v-model="model1" style="width:200px;margin-right:10px;">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                <Select v-model="model1" style="width:200px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
            <div>
                <Input v-model="inputValue" placeholder="请输入姓名" style="width: 150px;margin-right:10px;"/>
                <div class="pmbtn primary">
                    <i class="iconfont iconsousuo"></i>查询
                </div>
            </div>
        </div>
        <!-- table -->
        <div class="item">
            <el-table
                    :data="orderList"
                    class="myWisdomTable"
                    align="center"
            >
                <template slot="empty">
                    <img src="@oa/assets/暂无数据.png">
                    <br>
                    暂无内容
                </template>
                <el-table-column
                        header-align="center"
                        prop="name"
                        label="姓名"
                        width="100px"
                        show-overflow-tooltip
                >
                </el-table-column>

                <el-table-column
                        header-align="center"
                        prop="department"
                        label="处（科）室"
                        min-width="126px"

                >
                </el-table-column>
                <el-table-column
                        prop="position"
                        label="职务"
                        min-width="92px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="role"
                        label="角色"
                        min-width="132px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="workplace"
                        label="办公地址"
                        min-width="132px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="telephone"
                        label="办公室电话"
                        min-width="132px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        prop="cellphone"
                        label="手机号"
                        min-width="132px"
                        show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                        header-align="center"
                        prop="email"
                        label="电子邮箱"
                        min-width="132px"
                        show-overflow-tooltip
                >
                </el-table-column>
            </el-table>
            <div class="d-flex jc-center" style="margin-top:20px">
                <Page show-elevator show-total :page-size="pages.pageSize" :current="pages.pageNum"
                      :total="pages.totalElements"
                      @on-change="getPage"
                />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";


    @Component({})
    export default class workplaceMain extends Vue {
        no: boolean = false;
        model1: string = ''
        inputValue = '';
        pages: object = {
            pageSize: 10,
            pageNum: 1,
            totalElements: ''
        }
        cityList: Array<Object> = [
            {
                value: 'London',
                label: 'London'
            },
            {
                value: 'Sydney',
                label: 'Sydney'
            },
            {
                value: 'Paris',
                label: 'Paris'
            },

        ]

        getPage() {

        }
    }
</script>

<style lang="scss" scoped>
    .addressbook {
        background-color: #F7F7F7;
        height:100%;
    }

    .clearfix:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        zoom: 1; /* ie6 */
    }

    .gap {
        height: 1px;
        background: #EBEEF5;
        opacity: 1;

    }

</style>
