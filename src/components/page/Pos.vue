<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="order-list"  id='order-list'>
        <el-tabs>
          <el-tab-pane label='点餐'>
            <order-table></order-table>
          </el-tab-pane>
          <el-tab-pane label='挂单'>
            挂单
          </el-tab-pane>
          <el-tab-pane label='外卖'>
            外卖
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- 商品展示 -->
      <el-col :span='17'>
        <often-foods></often-foods>
        <goods-table></goods-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import orderTable from '@/components/table/OrderTable'
import goodsTable from '@/components/table/GoodsTable'
import oftenFoods from '@/components/foods/OftenFoods'

export default {
  name: 'pos',
  data () {
    return {
      
    }
  },
  components:{
    orderTable,
    oftenFoods,
    goodsTable
  },
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    document.getElementById("order-list").style.height=orderHeight+'px';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-list{
  background-color: #fff;
  border-right: 1px solid rgba(0, 0, 0,0.4);
}
.pos{
  font-size: 13px;
}
</style>
