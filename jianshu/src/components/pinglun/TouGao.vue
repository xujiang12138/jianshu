<template>
  <div>
    <div><p>全部投稿请求</p></div>
    <div class="line"></div>
    <div style="padding-top: 20px">
      <img src="//cdn2.jianshu.io/assets/web/icon_nocontent-00c423de394b9184d467f2f2a7284b54.png">
      <a>全部未处理消息</a>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "TouGao"
  }
</script>

<style scoped>
  p{
    font-size: 15px;
    font-weight: bold;
  }
  .line{
    border: .5px solid lightgrey;
  }
  .frame{
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    margin: 0px 10px 20px 20px;
  }
  img{
    width: 30px;
    height: 30px;
  }
</style>
