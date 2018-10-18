<template>
  <b-row>
    <b-col cols="4">
      <div>
        <ul id="test">
          <router-link to="comments"><li ><a class="active"> <img src="static/img/message.png" class="icon">评论</a></li></router-link>
          <router-link to="chats"><li><a><img src="static/img/letter.png" class="icon">简信</a></li></router-link>
          <router-link to="requests"><li><a><img src="static/img/download.png" class="icon">投稿请求</a></li></router-link>
          <router-link to="likes"><li><a><img src="static/img/love.png" class="icon">喜欢和赞</a></li></router-link>
          <router-link to="follows"><li><a><img src="static/img/follow.png" class="icon">关注</a></li></router-link>
          <router-link to="money"><li><a><img src="static/img/money.png" class="icon">赞赏和付费</a></li></router-link>
          <router-link to="others"><li><a><img src="static/img/other.png" class="icon">其他提醒</a></li></router-link>
        </ul>
      </div>
    </b-col>
    <b-col cols="8">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </b-col>
  </b-row>
</template>

<script>

  export default {
    name: "Notifications"
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

