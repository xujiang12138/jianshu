<template>
  <div>
    <div class="row" v-for="list in lists" :key="list.id">
      <div class="col-md-8">
        <div style="float: left;margin-top: 20px;margin-left: 20px  ">
          <a href="#" class="avatar"><img class="qrcode2" :src="list.url"></a>
        </div>
        <div  class="info" style="margin-top: 25px">
          <a class="title"><router-link :to="list.to">{{list.name}}</router-link><i class="iconfont ic-link"></i></a>
        </div>
      </div>
      <div class="col-md-4" style="margin-top: 30px;font-size: 15px;color: green">

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "ListTwo",
      data() {
        return {
          lists: [
            {
              "id": 1,
              "url": "//cdn2.jianshu.io/assets/default_avatar/2-9636b13945b9ccf345bc98d0d81074eb.jpg",
              "name": "JustCode",
              "to":"usOne"
            },
            {
              "id": 2,
              "url": "//upload.jianshu.io/users/upload_avatars/12233994/baaa8409-b93d-478f-ae11-9ed0e53e4756?imageMogr2/auto-orient/strip|imageView2/1/w/160/h/160/format/webp",
              "name": "技术小白",
              "to":"usTwo"

            },
            {
              "id": 3,
              "url": "//upload.jianshu.io/users/upload_avatars/6692325/9becc830-277d-4669-8e99-7912c2212299.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
              "name": "小白熊",
              "to":"usOne"

            },
            {
              "id": 4,
              "url": "//upload.jianshu.io/users/upload_avatars/12233994/baaa8409-b93d-478f-ae11-9ed0e53e4756?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp",
              "name": "瑞祥大爷",
              "to":"usOne"
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
    width: 50px;
    height: 50px;
    opacity: .85;
    border-radius: 50px;
  }
</style>
