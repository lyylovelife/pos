import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state={
    tableData:[]
}
const mutations={
    //添加食物到订单
    add(state,goods){
        //判断订单是否已存在相同的食物
        let isHave=false;//不存在
        for(let data of state.tableData){//ES6循环判断
            // console.log(data.goodsId);
            if(data.goodsId==goods.goodsId){
                isHave=true;//存在
            }
        }

        //根据isHave来决定订单是新增还是添加数量
        if(isHave){
            //存在就在数量上进行++,filter是ES6循环的一种
            // console.log(goods);
            let arr=state.tableData.filter(x=>x.goodsId==goods.goodsId);
            arr[0].count++;
            // //并且价格与数量成正比
            arr[0].price=arr[0].count*goods.price;
        }else{
            //不存在就推入数组中
            let newOrder={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
            state.tableData.push(newOrder);
        }
    },
    //订单列表直接增加数量
    add2(state,goods){
        let arr=state.tableData.filter(x=>x.goodsId==goods.goodsId);
        arr[0].count++;
        arr[0].price=arr[0].price/(arr[0].count-1)*arr[0].count;
    },
    //删除单个商品
    del(state,goods){
        console.log(goods);
        state.tableData=state.tableData.filter(x=>x.goodsId!=goods.goodsId);
    },
    //清空购物车
    delAll(state){
        state.tableData=[];
    },
    //结账
    checkOut(state){
        if(state.tableData!=null){
            state.tableData=[];
        }
    }
}

export default new Vuex.Store({
    state,
    mutations
})