<template>
    <div id="orderList">

        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">01</div>
                    <div class="text">字体</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item firstTitle">一级标题</div>
                    <div class="item firstTitle">.firstTitle</div>
                </div>
                <div class="aline">
                    <div class="item secondTitle">二级标题</div>
                    <div class="item secondTitle">.secondTitle</div>
                </div>
                <div class="aline">
                    <div class="item">正常文字</div>
                    <div class="item">#30374a</div>
                </div>
                <div class="aline">
                    <div class="item" style="color: #7c8185;">次级文字</div>
                    <div class="item" style="color: #595959;">$second-font-color</div>
                </div>
                <div class="aline">
                    <div class="item" style="color: #a0a5a9;">辅助文字</div>
                    <div class="item" style="color: #8C8C8C;">$third-font-color</div>
                </div>
                <div class="aline">
                    <div class="item" style="color: #BFBFBF;">提示文字</div>
                    <div class="item" style="color: #BFBFBF;">$tips-color</div>
                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">02</div>
                    <div class="text">颜色</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="colorBox normal">主题色<br/>#2064CF</div>
                </div>
                <div class="aline">
                    <div class="colorBox success">成功<br/>$success-color</div>
                    <div class="colorBox warning">警告<br/>$warning-color</div>
                    <div class="colorBox error">错误<br/>$error-color</div>
                </div>

            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">03</div>
                    <div class="text">按钮</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn primary">
                            <i class="iconfont iconsousuo"></i>搜索
                        </div>
                    </div>
                    <div class="item btn">确认；搜索；下一步...</div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn">取消</div>
                    </div>
                    <div class="item btn">取消；页面跳转；</div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn change">上传</div>
                    </div>
                    <div class="item btn">上传；导入；打开弹窗</div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn disable">打开</div>
                    </div>
                    <div class="item btn">禁用；无效</div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn primary disable">打开</div>
                    </div>
                    <div class="item btn">禁用；无效</div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn delete">删除</div>
                    </div>
                    <div class="item btn">删除</div>
                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">04</div>
                    <div class="text">输入框</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item">
                        <normalInput v-model="name" placeholder="请输入姓名"></normalInput>
                    </div>
                    <div class="item btn" >
                        默认，type="text",字符串
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <normalInput type="number" v-model="valNumber" placeholder="请输入正整数"></normalInput>
                    </div>
                    <div class="item btn" >
                        正整数，type="number", 大于等于0的整数
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <normalInput type="float" v-model="valFloat" placeholder="请输入正数"></normalInput>
                    </div>
                    <div class="item btn" >
                        正数，type="float", 大于等于0的数
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <normalInput type="allNumber" v-model="valAllNumber" placeholder="请输入整数"></normalInput>
                    </div>
                    <div class="item btn" >
                        所有整数，type="allNumber"
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <normalInput type="allNumber" placeholder="禁止输入" :disabled="true"></normalInput>
                    </div>
                    <div class="item btn">
                        禁止输入
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <normalInput type="search" placeholder="搜索"></normalInput>
                    </div>
                    <div class="item btn">
                        搜索框，搜索事件：@enter
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <textarea></textarea>
                    </div>
                    <div class="item btn">
                        文本域
                    </div>
                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">05</div>
                    <div class="text">下拉菜单</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item" style="width: 400px">
                        <mixSelect
                                v-model="estateId"
                                :selectList="SceneList"
                                labelName="name"
                                valueName="val"
                                childrenName="children"
                                placeholder="所属项目"
                                withParentName
                                @sentTo="projectSearch"
                                style="width: 100%"
                        >
                        </mixSelect>
                    </div>
                    <div class="item">
                        <mixSelect
                                v-model="orderState"
                                :selectList="orderStateList"
                                labelName="name"
                                valueName="id"
                                placeholder="工单状态"
                                @sentItem="orderStateSearch"
                                style="width: 140px"
                        >
                        </mixSelect>
                    </div>
                    <div class="item btn">
                        mixSelect组件，支持多级菜单
                    </div>
                </div>
                <div class="aline">
                    <div class="item" style="width: 400px">
                        <mixSelect
                                v-model="estateId"
                                :selectList="SceneList2"
                                labelName="name"
                                valueName="val"
                                childrenName="children"
                                placeholder="所属项目"
                                multiple
                                withParentName
                                checkStrictly
                                @sentItem="getmultiple"
                                style="width: 100%"
                        >
                        </mixSelect>
                    </div>
                    <div class="item btn">
                        多级，多选菜单用法，multiple="true"
                    </div>
                </div>

                <div class="aline">
                    <div class="item">
                        <normalInput v-model="name" placeholder="请输入名称"></normalInput>
                    </div>
                    <div class="item">
                        <div class="pmbtn primary">
                            <i class="iconfont iconsousuo"></i>搜索
                        </div>

                    </div>
                    <div class="item">
                        <div class="pmbtn">
                            <i class="iconfont iconshuaxin"></i>重置
                        </div>
                    </div>
                    <div class="item">
                        <div class="pmbtn primary">
                            <i class="iconfont iconxinzeng"></i>新增
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">06</div>
                    <div class="text">表格</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item" style="width: 860px;">
                        <el-table
                                :data="orderList"
                        >
                            <template slot="empty">
                                <img src="@oa/assets/暂无数据.png">
                                <br>
                                暂无内容
                            </template>
                            <el-table-column
                                    prop="id"
                                    label="工单编号"
                                    width="100px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>

                            <el-table-column
                                    prop="project"
                                    label="所属项目"
                                    min-width="126px"

                            >
                            </el-table-column>
                            <el-table-column
                                    prop="initiatorName"
                                    label="下单人"
                                    min-width="92px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="contact"
                                    label="联系方式"
                                    min-width="132px"
                                    show-overflow-tooltip
                            >
                            </el-table-column>


                            <el-table-column
                                    label="操作"
                                    align="right"
                                    width="120px"
                            >
                                <template slot-scope="{row,$index}">
                                    <font class="fontBtn">详情</font>
                                    <font class="fontBtn-delete">删除</font>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                </div>
                <div class="aline">
                    <div class="item" style="width: 240px;">
                        表格组件使用element-ui，页脚使用iview
                    </div>
                    <div class="item" style="width: 600px;">
                        <Page show-elevator show-total :page-size="pages.pageSize" :current="pages.pageNum"
                              :total="pages.totalElements"
                              @on-change="getPage"/>
                    </div>

                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">07</div>
                    <div class="text">选择框</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item" style="width:500px;">
                        <CheckboxGroup v-model="fruit">
                            <Checkbox label="香蕉"></Checkbox>
                            <Checkbox label="苹果"></Checkbox>
                            <Checkbox label="西瓜"></Checkbox>
                        </CheckboxGroup>
                    </div>
                    <div class="item btn">
                        多选框使用iview
                    </div>
                </div>
                <div class="aline">
                    <div class="item" style="width: 500px;">
                        <RadioGroup v-model="phone">
                            <Radio label="apple">
                                <Icon type="logo-apple"></Icon>
                                <span>Apple</span>
                            </Radio>
                            <Radio label="android">
                                <Icon type="logo-android"></Icon>
                                <span>Android</span>
                            </Radio>
                            <Radio label="windows">
                                <Icon type="logo-windows"></Icon>
                                <span>Windows</span>
                            </Radio>
                        </RadioGroup>
                    </div>
                    <div class="item btn">
                        单选框使用iview
                    </div>
                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">08</div>
                    <div class="text">弹窗</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn" @click="deleteSomething">删除</div>
                    </div>
                    <div class="item btn">
                        操作确认，使用element-ui
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn primary" @click="openDialog">打开弹窗</div>
                    </div>
                    <div class="item btn">
                        弹窗，使用element-ui
                    </div>
                </div>
                <div class="aline">
                    <div class="item">
                        <div class="pmbtn primary" @click="openMessage">提示信息</div>
                    </div>
                    <div class="item btn btn">
                        提示信息，使用element-ui，this.$message.info(`这里是提示`)
                    </div>
                </div>
            </div>
        </div>

        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">09</div>
                    <div class="text">tab搜索</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item">
                        <div class="tabSelect">
                            <div class="option active" >日报</div>
                            <div class="option">周报</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="square">
            <div class="left">
                <div class="center">
                    <div class="num">10</div>
                    <div class="text">时间日期选择</div>
                </div>
            </div>
            <div class="right">
                <div class="aline">
                    <div class="item">
                        <DatePicker v-model="time1" type="date" placeholder="选择日期" style="width: 300px"></DatePicker>
                    </div>
                    <div class="item">使用 iview 时间选择组件</div>
                </div>

            </div>
        </div>


        <el-dialog
                :visible.sync="dialogVisible"
                custom-class="emDialog"
                width="530px"
        >
            <div class="title" slot="title">
                <div class="iconColumn"></div>
                新增工单
            </div>
            <div class="MuModalContent">
                <div class="aline">
                    <div class="item btn">房间代码：</div>
                    <div class="item">
                        <normalInput style="width: 200px" placeholder="房间代码"></normalInput>
                    </div>
                </div>
                <div class="aline">
                    <div class="item btn">房间代码：</div>
                    <div class="item">
                        <normalInput style="width: 200px" placeholder="房间代码"></normalInput>
                    </div>
                </div>
                <div class="aline">
                    <div class="item btn">房间代码：</div>
                    <div class="item">
                        <normalInput style="width: 200px" placeholder="房间代码"></normalInput>
                    </div>
                </div>
                <div class="aline">
                    <div class="item btn">房间代码：</div>
                    <div class="item">
                        <normalInput  style="width: 200px" placeholder="房间代码"></normalInput>
                    </div>
                </div>
            </div>

            <div slot="footer">
                <div class="pmbtn primary" style="margin-right: 10px">确定</div>
                <div class="pmbtn" @click="dialogVisible = false">取消</div>
            </div>
        </el-dialog>
    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";



    @Component({
        components: {

        }
    })


    export default class template extends Vue {
        time1:any = '';
        name: any = '';
        valNumber: any = '';
        valFloat: any = '';
        valAllNumber: any = '';
        fruit: any = [];
        phone: any = '';
        dialogVisible: boolean = false;
        orderList: any = [
            {
                id: 'c001',
                project: '项目1',
                initiatorName: '张新',
                contact: '156****9998',

            },
            {
                id: 'c002',
                project: '项目2',
                initiatorName: '王瑞',
                contact: '156****9998',

            },
        ];
        SceneList: any = [
            {
                name: "全部",
                val: `0`,
            },
            {
                name: "工程管理类",
                children: [
                    {
                        name: "全部工程管理类",
                        val: `10`,

                    },
                    {
                        name: "污水处理及配套设施",
                        val: `11`,
                        children: [
                            {
                                name: "1类项目",
                                val: `962`,
                            },
                            {
                                name: "2类项目",
                                val: `4186`,
                            }
                        ]
                    },

                    {
                        name: "饮用水源地污染防治项目",
                        val: `12`,
                        children: [
                            {
                                name: "地表水治理",
                                val: `830`,
                            },
                            {
                                name: "山泉水饮用",
                                val: `213`,
                                children: [
                                    {
                                        name: "开发",
                                        val: `213-1`,
                                    },
                                    {
                                        name: "环境维护",
                                        val: `213-2`,
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: "区域水环境综合整治",
                        val: `13`,
                    }
                ]

            },
            {
                name: "管理类项目",
                children: [
                    {
                        name: "全部管理类",
                        val: `20`,
                    },
                    {
                        name: "土地管理",
                        val: `21`,
                        children: [
                            {
                                name: "土地面测绘",
                                val: `21-1`,
                            },
                            {
                                name: "土地资源整合",
                                val: `21-2`,
                            }
                        ]
                    },
                    {
                        name: "环境管理",
                        val: `22`,
                    },
                    {
                        name: "电力管理",
                        val: `23`,
                    },
                ]

            },
            {
                name: "三元重工",
                val: `3`,
            },
        ];
        SceneList2: any = [
            {
                name: "三元重工",
                val: `3`,
            },
            {
                name: "工程管理类",
                val: `2`,
                children: [

                    {
                        name: "污水处理及配套设施",
                        val: `11`,
                        children: [
                            {
                                name: "1类项目",
                                val: `962`,
                            },
                            {
                                name: "2类项目",
                                val: `4186`,
                            }
                        ]
                    },

                    {
                        name: "饮用水源地污染防治项目",
                        val: `12`,
                        children: [
                            {
                                name: "地表水治理",
                                val: `830`,
                            },
                            {
                                name: "山泉水饮用",
                                val: `213`,
                                children: [
                                    {
                                        name: "开发",
                                        val: `213-1`,
                                    },
                                    {
                                        name: "环境维护",
                                        val: `213-2`,
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        name: "区域水环境综合整治",
                        val: `13`,
                    }
                ]

            },
            {
                name: "管理类项目",
                val: `1`,
                children: [

                    {
                        name: "土地管理",
                        val: `21`,
                        children: [
                            {
                                name: "土地面测绘",
                                val: `21-1`,
                            },
                            {
                                name: "土地资源整合",
                                val: `21-2`,
                            }
                        ]
                    },
                    {
                        name: "环境管理",
                        val: `22`,
                    },
                    {
                        name: "电力管理",
                        val: `23`,
                    },
                ]

            }
        ];
        estateId: string = '';
        orderState: string = '';
        orderStateList: any = [
            {
                id: '',
                name: '全部状态',
            },
            {
                id: '0',
                name: '待审核',
            },
            {
                id: '1',
                name: '待接单',
            },
            {
                id: '3',
                name: '待维修',
            },
            {
                id: '4',
                name: '维修中',
            },
            {
                id: '6',
                name: '超期',
            },
            {
                id: '13',
                name: '待支付',
            },
            {
                id: '14',
                name: '已支付',
            },
            {
                id: '5',
                name: '已完成',
            },


        ];


        tabList: Array<{ name: string }> = [
            {
                name: '欠款明细',
            },
            {
                name: '缴费记录',
            },
        ]

        pages: any = {
            pageNum: 1,
            pageSize: 3,
            totalElements: 20,
        };

        tabChange(item: any) {
            console.log(item)
        }



        projectSearch(val: any) {
            console.log(val)
        }

        getmultiple(val: any) {
            console.log(val)
        }

        orderStateSearch(item: any) {
            console.log(item)
        }

        getPage(page?: number) {
            this.pages.pageNum = page || 1;
            console.log(page)
        }

        openDialog() {
            this.dialogVisible = true
        }

        openMessage() {
            this.$message.info(`这里是提示信息！`)
        }

        deleteSomething() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '操作提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {

            });
        }

        changeTheme(name: string) {
            document.getElementsByTagName('body')[0].style.setProperty('--color', '#27C992');
        }

        mounted(): void {

        }

    }


</script>

<style lang="scss" scoped>


    #orderList {
        width: 100%;
        height: 100%;

        .orderListMain {
            width: 100%;
            height: calc(100% - 46px);
            background-color: #fff;


        }

        .square {
            display: flex;
            padding: 30px;

            .left {
                width: 200px;
                display: inline-flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;

                .center {
                    text-align: right;
                }

                .num, .text {
                    @include base-color();
                    font-size: 32px;
                    line-height: 1;
                }

                .num {
                    font-size: 50px;
                }
            }

            .right {
                flex: 1;


                .colorBox {
                    width: 130px;
                    height: 100px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    margin-right: 20px;
                    margin-bottom: 10px;

                    &.normal {
                        @include base-background();
                    }

                    &.background {
                        //@include background-image;
                    }

                    &.success {
                        background-color: $success-color;
                    }

                    &.warning {
                        background-color: $warning-color;
                    }

                    &.error {
                        background-color: $error-color;
                    }
                }
            }
        }
    }

    .aline {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;

        .item {
            padding: 0 20px;
            min-width: 120px;

            &.btn {
                line-height: 36px;
            }
        }
    }


</style>

