<template>
    <div id="addDaily" class="addModule">
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
                <div class="title">新建日报</div>
                <div class="label">日报所属日期</div>
                <div class="info">
                    <DatePicker v-model="time1" type="date" placeholder="选择日报所属日期" style="width: 220px"></DatePicker>
                </div>

                <div class="label">上午工作情况</div>
                <div class="info">
                    <textarea class="input" style="height: 100px" placeholder="请输入上午工作情况"></textarea>
                </div>

                <div class="label">下午工作情况</div>
                <div class="info">
                    <textarea class="input" style="height: 100px" placeholder="请输入下午工作情况"></textarea>
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
        mounted(): void {

        }


    }

</script>

<style lang="scss" scoped>

</style>

