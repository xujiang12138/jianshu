<template>
  <div>
    <div><p>全部关注</p></div>
    <div class="line"></div>
    <div class="center">
      <img src="//cdn2.jianshu.io/assets/web/icon_nocontent-00c423de394b9184d467f2f2a7284b54.png">
      <p>这里还木有内容哦~</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuanZhu"
  }
</script>

<style scoped>
  p{
    font-size: 15px;
    font-weight: bold;
  }
  img{
    width: 120px;
    height: 100px;
  }
  .center{
    position:absolute;
    left:50%;    /* 定位父级的50% */
    top:70%;
    transform: translate(-50%,-50%); /*自己的50% */
  }
  .line{
    border: .5px solid lightgrey;
  }
</style>
