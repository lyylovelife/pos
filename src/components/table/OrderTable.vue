<template>
  <div class="orderTable">
    <el-table :data="tableData" show-summary border style="width: 100%">
        <el-table-column prop='goodsName' label='商品名称' width='120'></el-table-column>
        <el-table-column prop='count' label='数量' width='60'></el-table-column>
        <el-table-column prop='price' label='金额' width='80'></el-table-column>
        <el-table-column label='操作' fixed='right'>
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                <el-button type="text" size="small" @click="add2(scope.row)">增加</el-button>
            </template>  
        </el-table-column>
    </el-table>
    <div class="div-btn">
      <el-button type='warning'>挂单</el-button>
      <el-button type='danger' @click="delAll">清空</el-button>
        <el-button type='success' @click="check(tableData)">结账</el-button>            
    </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
import store from '@/vuex/store'

export default {
  name:'orderTable',
  data(){
      return{
          // tableData:[]
      }
  },
  methods:{
      //添加订单方法扩展
      ...mapMutations(['add','del','add2','delAll','checkOut']),
      check(tableData){
        //   console.log(tableData);
          if(tableData.length!=0){
              this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
              }).then(() => { 
                this.checkOut();
                this.$message({
                  type: 'success',
                  message: '结算成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });
          }else{
                this.$message({
                  type: 'warning',
                  message: '购物车为空'
                }); 
          }
      }
  },
  computed:{
    //扩展状态，从store公共区获取订单数据
    ...mapState(['tableData'])
  },
  store
}
</script>
<style scoped>
.div-btn{
  margin-top: 10px;
}

</style>