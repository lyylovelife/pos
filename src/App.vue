<template>
  <div id="app">
    <!-- 左侧导航栏 -->
    <left-nav></left-nav> 
    
    <!-- <img src="./assets/logo.png"> -->
    <!-- 操作区域 -->
    <main id='main'>
      <router-view/>
    </main>
  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'

export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main{
  float: left;
  width: 95%;
  height: 100%;
  background-color: #EFF2F7;
  overflow: hidden;
}
</style>
