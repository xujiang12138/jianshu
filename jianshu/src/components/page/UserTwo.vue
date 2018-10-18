<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6">
            <div style="float: left;margin-top: 20px;margin-left: 20px  ">
              <a href="#" class="avatar"><img class="qrcode2" src="//upload.jianshu.io/users/upload_avatars/12233994/baaa8409-b93d-478f-ae11-9ed0e53e4756?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp"></a>
            </div>
            <div style="margin-left: 100px;margin-top: 40px">
              <a href="#"class="name" >技术小白熊<i class="iconfont ic-link"></i></a>
              <div class="info">写了1133字</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">

        <button class="btn" >发简信></button>
        <button class="btn1">个人主页></button>
      </div>
    </div>
    <div class="row" style="margin-top: 20px;margin-left: 20px">
      <div>
        <b-nav tabs>
          <b-nav-item active><router-link to="tuijian">最近发布</router-link></b-nav-item>
          <b-nav-item><router-link to="remen">最近评论</router-link></b-nav-item>
          <b-nav-item>热门</b-nav-item>
        </b-nav>
      </div>
    </div>
    <div  style="margin-left: 20px">
      <v-title></v-title>
    </div>
  </div>
</template>

<script>
  import vTitle from '../common/Title'
  export default {
    name: "UserTwo",
    components:{
      vTitle
    }
  }
</script>

<style scoped>
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;

  }

  .qrcode2 {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    opacity: .85;
    border-radius: 50px;
  }
  .title span {
    font-size: 14px;
    color: #969696;
  }
  .name {
    font-size: 21px;
    font-weight: 700;
    vertical-align: middle;
    display: inline;
  }

  .info {
    margin-top: 10px;
    padding-left: 0px;
    font-size: 14px;
    color: #969696;
  }

  .btn {
    float: right;
    margin: 50px 0 23px 20px;
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: none;
  }

  .btn1 {
    margin: 50px 0 23px 40px;
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: none;
  }
</style>
