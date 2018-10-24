<template>
    <div>
      <div class="row" v-for="list in lists" :key="list.id">
        <div class="col-md-8">
          <div style="float: left;margin-top: 20px;margin-left: 20px  ">
            <a href="#" class="avatar"><img class="qrcode2" :src="list.avatar"></a>
          </div>
          <div  class="info" style="margin-top: 25px">
            <a href="#" class="title">{{list.nickname}}<i class="iconfont ic-link"></i></a>
            <div class="description">写了{{list.wordsCount}}个字，{{list.likeCount}}喜欢</div>
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
            lists: []
          }
      },
      created() {
        var that = this
        this.$http
          .get('http://localhost:8088/user/hot')
          .then(function (response) {
            // alert(JSON.stringify(response.data.data));
            that.lists = response.data.data;
          })
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
