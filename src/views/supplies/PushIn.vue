<template>
    <div id="addNotice" >
        <div class="content">
            <div class="backLine">
                <div class="left" @click="$router.go(-1)">
                    <i class="iconfont iconxiangyou"></i>
                    返回
                </div>
                <div class="right">
                    <div class="pmbtn" @click="$router.go(-1)">取消</div>
                    <div class="pmbtn primary" style="margin-left:10px" v-if="isOk" @click="submit">
                        <i class="iconfont iconfabu"></i>提交
                    </div>

                    <div class="pmbtn disable" style="margin-left:10px" v-else> <i class="iconfont iconfabu"></i>提交</div>
                </div>
            </div>
            <div class="whiteSpace">
                <div class="title">入库登记</div>
                <div class="d-flex ">
                    <div class="d-flex flex-column" style="margin-right:48px">
                        <div class="label"><span class="notnull">*</span>领用人</div>
                        <normalInput class="input" v-model="model.who" placeholder="请选择部门、人员"></normalInput>
                    </div>
                    
                    <div class="d-flex flex-column" style="margin-right:48px">
                        <div class="label"><span class="notnull">*</span>出库时间</div>
                        <el-date-picker
                        v-model="model.when"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="label"><span class="notnull">*</span>关联审批</div>
                        <mixSelect
                            style="width:270px"
                            v-model="model.fileName"
                            :selectList="orderStateList"
                            labelName="name"
                            valueName="id"
                            placeholder="请选择审批文件"
                            @sentItem="orderStateSearch"
                                    >
                        </mixSelect>
                    </div>
                </div>

                 <div class="d-flex ">
                    <div class="d-flex flex-column" style="margin-right:48px">
                        <div class="label"><span class="notnull">*</span>办公用品名称</div>
                         <mixSelect
                            style="width:270px"
                            v-model="model.supplyName"
                            :selectList="orderStateList"
                            labelName="name"
                            valueName="id"
                            placeholder="纸"
                            @sentItem="orderStateSearch"
                                    >
                        </mixSelect>
                    </div>
                    
                    <div class="d-flex flex-column" style="margin-right:48px">
                        <div class="label">物品规格</div>
                        <normalInput class="input" v-model="model.type" placeholder="6号"></normalInput>
                    </div>

                    <div class="d-flex flex-column">
                        <div class="label">物品单位</div>
                        <normalInput class="input"  v-model="model.unit" placeholder="个" ></normalInput>
                    </div>
                </div>

                 <div class="d-flex flex-column" style="margin-right:48px">
                        <div class="label"><span class="notnull">*</span>数量</div>
                        <normalInput class="input" v-model="model.amount" placeholder="请填入数字"></normalInput>
                    </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component,Watch} from "vue-property-decorator";
    @Component({})
    export default class PushInPage extends Vue {
         orderState:string='';
        //  isOk: boolean = true;
         model:any={
             amount:'',
             type:'',
             unit:'',
             supplyName:'',
             fileName:'',
             who:'',
             when:''
         }
         get isOk(){
            if(this.model.supplyName&&this.model.who&&this.model.fileName&&this.model.when&&this.model.amount){
                if(this.numberCheck()){
                     return true;
                }
            }else{
                return false;
            }
         }

           
        numberCheck(){
            const reg = /^\d{1,}$/;
            return reg.test(this.model.amount);
        }

         orderStateList: any = [
            
            {
                id: '0',
                name: '待审核',
            },
            {
                id: '1',
                name: '待接单',
            }]

        orderStateSearch(){}
        submit(){
            console.log(this.model)
            this.numberCheck();
        }
    }

</script>

<style lang="scss" scoped>
    #addNotice{
        height: 100%;
        display: flex;
        justify-content: center;
        .notnull{
            color:#f00;margin-right:5px;
        }
        .input{
            width:270px !important;
            height:40px !important;
        }
        .myInputbox {
             width:270px !important;
            height:40px !important;
        }
        .backLine{
            height: 60px;
            align-items: center;
            display: flex;
            justify-content: space-between;

            .left {
                .iconfont{
                    margin-right: 15px;
                }
                display: inline-flex;
                font-size: 16px;
                cursor: pointer;
            }
            .right{
                display: inline-flex;
            }
        }
        .content{
            width: 960px;
            padding-bottom:30px;
            .whiteSpace {
                background-color: #fff;
                height: calc(100% - 60px);
                padding: 32px;
                .title{
                    font-size: 20px;
                    height: 20px;
                    line-height: 20px;
                    margin-bottom: 32px;
                }
                .label{
                    margin-bottom: 12px;
                }
                .input{
                    width: 100%;
                    margin-bottom: 32px;
                }
            }

        }

        .el-date-editor.el-input, .el-date-editor.el-input__inner{
            width:270px;
        }
    }
</style>

