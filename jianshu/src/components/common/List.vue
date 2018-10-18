<template>
    <div>
      <div class="row" v-for="list in lists" :key="list.id">
        <div class="col-md-8">
          <div style="float: left;margin-top: 20px;margin-left: 20px  ">
            <a href="#" class="avatar"><img class="qrcode2" :src="list.url"></a>
          </div>
          <div  class="info" style="margin-top: 25px">
            <a href="#" class="title">{{list.name}}<i class="iconfont ic-link"></i></a>
            <div class="description">{{list.content}}</div>
          </div>
        </div>
        <div class="col-md-4" style="margin-top: 30px;font-size: 15px;color: green">
          <a>+关注</a>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "List",
      data(){
          return{
            lists:[
              {
                "id":1,
                "url":"//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png",
                "name":"简书大学堂",
                "content":"写了15k字"
              },
              {
                "id":2,
                "url":"//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png",
                "name":"简书大学堂",
                "content":"写了15k字"
              },
              {
                "id":3,
                "url":"//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png",
                "name":"简书大学堂",
                "content":"写了15k字"
              },
              {
                "id":4,
                "url":"//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png",
                "name":"简书大学堂",
                "content":"写了15k字"
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .title span {
    font-size: 14px;
    color: #969696;
  }

  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;

  }

  .qrcode2 {
    width: 60px;
    height: 60px;
    opacity: .85;
    border-radius: 50px;
  }
</style>
