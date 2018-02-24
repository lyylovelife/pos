<template>
  <div class="goods-type">
      <el-tabs>
          <el-tab-pane label='汉堡'>
            <ul class='cookList'>
                <li v-for="goods in type0Goods" @click="add(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label='小食'>
            <ul class='cookList'>
                <li v-for="goods in type1Goods" @click="add(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label='饮料'>
            <ul class='cookList'>
                <li v-for="goods in type2Goods" @click="add(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label='套餐'>
            <ul class='cookList'>
                <li v-for="goods in type3Goods" @click="add(goods)">
                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                </li>
            </ul>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
import axios from 'axios'
import store from '@/vuex/store'
import {mapState,mapMutations} from 'vuex'

export default {
    name:'goods-type',
    data(){
        return{
            type0Goods:[],
            type1Goods:[],
            type2Goods:[],
            type3Goods:[],
        }
    },
    created:function(){
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
        .then(response=>{
            //   console.log(response);
            this.type0Goods=response.data[0];
            this.type1Goods=response.data[1];
            this.type2Goods=response.data[2];
            this.type3Goods=response.data[3];
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
.cookList li{
       list-style: none;
       width:30%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
        width: 50%;
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:20px;
       width: 50%;
   }
   .goods-type{
       clear: both;
       border-top: 1px solid rgba(0, 0, 0, 0);
        padding: 20px;
        font-size: 12px;
   }
</style>

