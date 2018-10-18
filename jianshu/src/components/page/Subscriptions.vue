<template>
<div class="container">
  <div class="row">
    <div class="col-md-3">
      <div  class="title" style="margin-top: 30px">
        <span style="margin-left: -80px">全部关注</span>
        <span style="float: right">添加关注</span>
      </div>
      <div>
        <v-list-two></v-list-two>
      </div>
    </div>
    <div class="col-md-9">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</div>
  </div>
</template>

<script>
  import vListTwo from '../common/ListTwo'
    export default {
        name: "Subscriptions",
      components:{
          vListTwo
      }
    }
</script>

<style scoped>

</style>
