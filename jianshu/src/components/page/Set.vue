<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div style="margin-top: 20px">
          <ul id="test">
            <router-link to="basic"><li ><a class="active"> <img src="static/img/message.png" class="icon">基础设置</a></li></router-link>
            <router-link to="profile"><li><a><img src="static/img/letter.png" class="icon">个人资料</a></li></router-link>
            <router-link to="requests"><li><a><img src="static/img/download.png" class="icon">微博认证</a></li></router-link>
            <router-link to="likes"><li><a><img src="static/img/love.png" class="icon">          黑名单</a></li></router-link>
            <router-link to="follows"><li><a><img src="static/img/follow.png" class="icon">赞赏设置</a></li></router-link>
            <router-link to="money"><li><a><img src="static/img/money.png" class="icon">账号管理</a></li></router-link>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Set"
    }
</script>

<style scoped>
  ul{
    list-style-type: none;
  }
  ul li{
    color: #000;
  }
  ul li a{
    display:block;
    width:250px ;
    height: 50px;
    justify-content: center;
    padding: 15px 50px 0px;
  }
  ul li a:hover{
    background:lightgrey;
  }
  .active{
    background:lightgrey;
  }
  .icon{
    padding: 0px 10px 0px 10px
  }



</style>
