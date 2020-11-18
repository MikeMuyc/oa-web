<template>
  <div class="user" ref="user">
    <div class="d-flex jc-between searchBar" style="margin:20px 32px;"  ref="searchBar">
          <div class="d-flex ai-center">
              <normalInput v-model="supplyName" placeholder="请输入办公用品名称"></normalInput>
              <div class="pmbtn primary" style="margin-left:10px" @click="getSuppliesByName">
                  <i class="iconfont iconsousuo"></i>查询
              </div>
          </div>
          <div>
           <div class="pmbtn primary"  @click="$router.push({name:'新增入库'})">
              <span class="iconfont iconxinzeng" style="margin-right:5px"></span>
              新增入库
          </div>
          <div class="pmbtn primary" style="margin-left:10px" @click="$router.push({name:'新增出库'})">
              <span class="iconfont iconxinzeng" style="margin-right:5px"></span>
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
                    <img src="@oa/assets/暂无数据.png">
                    <br>
                    暂无内容
                </template>
                <el-table-column
                    type="selection"
                    label=""
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

               <el-table-column
                    label="操作"
                    align="center"
                    min-width="200px"
            >
                <template slot-scope="{row,$index}">
                    <font class="fontBtn">出库</font>
                    <font class="fontBtn">入库</font>
                </template>
            </el-table-column>
            </el-table>
            <div class="pageBottom" ref="pageBottom" >
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
    import { supplyApi } from '@oa/api'

    @Component({})
    export default class workplaceMain extends Vue {
        no: boolean = false;
        model1: string = '';
        supplyName = '';
        supplyList = [];

        orderState: string = '';
        formHeight: number =600
        pages: any = {
            pageSize: 10,
            pageNum: 1,
            totalElements:0
        }
        tableData:any = []
        orderList:Array<object>=[];
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
            }]

        orderStateSearch(item:any) {
            console.log(item)
        }

        getPage() {

        }

      async  getSuppliesByName(){

            const params = {
                name:this.supplyName,
                pageSize:this.pages.pageSize,
                pageNum:this.pages.pageNum
            }
            try {
                const res =await supplyApi.getSupplies(params);
                this.tableData = res.data.content
                console.log(res)
                // debugger
                // const res =await this.$http('/api/oa/upplies/page',{params});
            } catch (error) {
                console.log(error)
                this.supplyList = [];
            }
        }

        setPageSize(){
            let refs: any = this.$refs;
            let maxHeight = refs.user.clientHeight;
            let searchBarHight = refs.searchBar.clientHeight + 40;  // 40px 上下margin
            let pageBottomHight = refs.pageBottom.clientHeight;
            this.formHeight =  maxHeight - searchBarHight - pageBottomHight ;
            this.pages.pageSize = Math.floor((this.formHeight - 49) / 48);  //表头高度49px，每一行高度48px;
        }

         mounted(): void {
            this.$nextTick(()=>{
                this.setPageSize();
            })
            this.getSuppliesByName();
        }





    }
</script>

<style lang="scss" scoped></style>
