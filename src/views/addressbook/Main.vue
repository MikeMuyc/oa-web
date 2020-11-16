<template>
  <div class="addressbook clearfix">
      <!-- <div style="margin:10px 0;float:right" >
        <Button type="primary" style="margin-right:10px;">新增人员信息</Button>
        <Button type="primary">机构信息更新</Button>
      </div> -->
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
            <Input v-model="inputValue" placeholder="请输入姓名" style="width: 150px;margin-right:10px;" />
            <Button type="primary">查询</Button>
        </div>
      </div>
      <!-- table -->
       <Table :columns="columns1" :data="data1" :border='no'	></Table>
  </div>
</template>



<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component({})
export default class workplaceMain extends Vue {
    no:boolean=false;
    cityList:Array<Object> =[
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
    model1:string='';
    inputValue = '';
     columns1:Array<Object> = [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ]
    data1:Array<Object> = [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
}
</script>

<style lang="scss" scoped>
    .addressbook{
        background-color: #F7F7F7;
        height:calc(100% - 56px);
    }

    .clearfix:after{
        content:'';
        display:block;
        height:0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        zoom:1; /* ie6 */
    }
    .gap{
        height: 1px;
        background: #EBEEF5;
        opacity: 1;

    }
</style>
