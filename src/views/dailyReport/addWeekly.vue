<template>
    <div id="addWeekly" class="addModule">
        <div class="content">
            <div class="backLine">
                <div class="left" @click="$router.go(-1)">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">

                    <div class="pmbtn primary" >
                        <i class="iconfont iconfabu"></i>提交
                    </div>

                </div>
            </div>
            <vue-perfect-scrollbar class="whiteSpace">
                <div class="title">新建周报</div>
                <div class="label">周报所属时间</div>
                <div class="info">
                    <DatePicker type="month" placeholder="请选择周报所属年月" style="width: 220px;margin-right: 30px"></DatePicker>
                    <mixSelect
                            v-model="week"
                            :selectList="weekList"
                            labelName="name"
                            valueName="id"
                            placeholder="选择周数"
                            style="width: 120px"
                    >
                    </mixSelect>
                </div>

                <div class="label">上周已完成的工作</div>
                <div class="info">
                    <textarea class="input" style="height: 80px" placeholder="请输入上周完成的工作"></textarea>
                </div>

                <div class="label">本周要完成的工作</div>
                <div class="info">
                    <textarea class="input" style="height: 80px" placeholder="请输入本周要完成的工作"></textarea>
                </div>

                <div class="label">正在推进的工作</div>
                <div class="info">
                    <textarea class="input" style="height: 80px" placeholder="请输入正在推进的工作"></textarea>
                </div>
            </vue-perfect-scrollbar>
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



        time1:any = '';
        week:any = '';
        weekList:any = [
            {
                name:'第一周',
                id:1,
            },
            {
                name:'第二周',
                id:2,
            },
            {
                name:'第三周',
                id:3,
            },
            {
                name:'第四周',
                id:4,
            },
            {
                name:'第五周',
                id:5,
            },
        ]
        mounted(): void {

        }


    }

</script>

<style lang="scss" scoped>

</style>

