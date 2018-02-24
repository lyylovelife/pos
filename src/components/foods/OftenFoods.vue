<template>
  <div class="often-goods">
      <div class="title">常用商品</div>
      <div class="often-goods-list">
          <ul>
              <li v-for="good in goods" @click="add(good)">
                  <span>{{good.goodsName}}</span>
                  <span class="o-price">￥{{good.price}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'

export default {
  name:'often-goods',
  data(){
      return{
          goods:[]
      }
  },
  created:function(){
      axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(response=>{
        //   console.log(response);
          this.goods=response.data;
      }).catch(error=>{
          console.log(console.error);
      })
  },
  store,
  methods:{
      //添加订单的方法扩展
      ...mapMutations(['add'])
  }
}
</script>
<style scoped>
.title{
    height: 20px;
    border: 1px solid #D3DCE6;
    background-color: #f9fafc;
    padding: 10px;
}
.often-goods-list ul li{
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
}
.o-price{
    color: #58b7ff;
}
.often-goods-list{
    clear: both;
    padding: 15px;
}
</style>
