<template>
  <div class="user" ref="user">
    <div class="d-flex jc-between searchBar" style="margin:20px 32px;"  ref="searchBar">
          <div class="d-flex ai-center">
              <normalInput v-model="inputValue" placeholder="请输入姓名"></normalInput>
              <div class="pmbtn primary" style="margin-left:10px">
                  <i class="iconfont iconsousuo"></i>查询
              </div>
          </div>
          <div>
          <div class="pmbtn primary" style="margin-right:10px">
              <span class="iconfont iconshuaxin" style="margin-right:5px"></span>
              权限管理
          </div>
          <div class="pmbtn primary" >
              <span class="iconfont iconxinzeng" style="margin-right:5px"></span>
              新增人员信息
          </div>
        </div>
    </div>

    <!-- table -->
        <div class="item">
            <el-table
                    :data="orderList"
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
                        header-align="center"
                        prop="name"
                        label="姓名"
                        width="100px"
                        show-overflow-tooltip
                >
                </el-table-column>
                 <el-table-column
                        header-align="center"
                        prop="name"
                        label="用户名"
                        width="100px"
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
                        prop="workplace"
                        label="所在机构"
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
                    label="操作"
                    align="center"
                    width="150px"
            >
                <template slot-scope="{row,$index}">
                    <font class="fontBtn">详情</font>
                    <font class="fontBtn-delete">删除</font>
                    <font class="fontBtn-delete">重置密码</font>

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


    @Component({})
    export default class workplaceMain extends Vue {
        no: boolean = false;
        model1: string = '';
        inputValue = '';
        orderState: string = '';
        formHeight: number =600
        pages: any = {
            pageSize: 10,
            pageNum: 1,
            totalElements:0
        }
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

        setPageSize(){
            let refs: any = this.$refs;
            let maxHeight = refs.user.clientHeight;
            console.log(maxHeight);
            // 40px 上下margin
            let searchBarHight = refs.searchBar.clientHeight + 40;
            console.log(searchBarHight)
            let pageBottomHight = refs.pageBottom.clientHeight;
            console.log(pageBottomHight)
            this.formHeight =  maxHeight - searchBarHight - pageBottomHight ;
            //表头高度49px，每一行高度48px;
            this.pages.pageSize = Math.floor((this.formHeight - 49) / 48);
            console.log( this.formHeight)
        }

         mounted(): void {
            this.$nextTick(()=>{
                this.setPageSize();
            })
        }
        




    }
</script>

<style lang="scss" scoped></style>