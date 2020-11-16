<template>
    <div id="noticeList">

    </div>
</template>
<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Spin, Select, Option, Icon, Page, CheckboxGroup, RadioGroup, Radio, Checkbox} from 'view-design'

    import Input from '@oa/components/normalInput.vue';

    @Component({
        components: {
            Input,
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
        name: any = '';
        valNumber: any = '';
        valFloat: any = '';
        valAllNumber: any = '';
        fruit:any = [];
        phone:any = '';
        dialogVisible:boolean = false;
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

            }
        ];
        SceneList2: any = [

            {
                name: "工程管理类",
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


        tabList:Array<{ name:string }> = [
            {
                name:'欠款明细',
            },
            {
                name:'缴费记录',
            },
        ]

        pages: any = {
            pageNum: 1,
            pageSize: 3,
            totalElements: 20,
        };

        tabChange(item){
            console.log(item)
        }
        conso(valName: string) {
            console.log(this[valName], typeof this[valName])
        }

        projectSearch(val) {
            console.log(val)
        }
        getmultiple(val) {
            console.log(val)
        }

        orderStateSearch(item) {
            console.log(item)
        }

        getPage(page?:number) {
            this.pages.pageNum = page || 1;
            console.log(page)
        }

        openDialog() {
            this.dialogVisible=true
        }
        openMessage(){
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

        changeTheme(name:string){
            document.getElementsByTagName('body')[0].style.setProperty('--color','#27C992');
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

