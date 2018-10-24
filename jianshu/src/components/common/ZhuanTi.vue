<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="row top" style="margin-left: 50px">
          <b-col  cols="2">
            <img  class="avatar" src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240">
          </b-col>
          <b-col  cols="4">
            <p class="name">{{topic.topicname}}</p>
            <div style="display: flex">
              <p class="info">收录了{{topic.articlecount}}篇文章 · {{topic.fans}}人关注</p>
            </div>
          </b-col>
          <b-col  cols="6">
            <div >
              <b-button class="btn1" variant="outline-success">投稿</b-button>
              <b-button class="btn" variant="success"> + 关注</b-button>
            </div>

          </b-col>
        </div>
        <b-tabs style="margin-left: 60px">
          <b-tab title="最近评论" active>
            <div>
              <div class="row out-set" v-for="article in articleList" :key="article.id" >
                <b-col  cols="8">
                  <p style="font-size: 18px;font-weight: bold;color: #333;padding-top: 6%;margin-left: -400px">{{article.title}}</p>
                  <p style="color: grey;font-size: 12px;color: gray;letter-spacing: 1px;margin-left: -200px">{{article.summary}}</p>
                  <div class="line">
                    <p class="amount-text" style="margin-left: -40px">{{article.nickName}}</p>
                    <img  src="http://p88kzenjw.bkt.clouddn.com/message.png" class="icon2">
                    <p class="amount-text">{{article.comments}}</p>
                    <img  src="http://p88kzenjw.bkt.clouddn.com/like.png" class="icon3">
                    <p class="amount-text">{{article.likes}}</p>
                  </div>
                </b-col>
                <b-col  cols="4" style="margin-top:5%">
                  <img :src="article.thumbnail" class="picture">
                </b-col>
              </div>
            </div>
          </b-tab>
          <b-tab title="最新收录" >
            <br>最新评论
          </b-tab>
          <b-tab title="热门" >
            <br>热门
          </b-tab>
        </b-tabs>

      </div>
      <div class="col-md-4">
        <p class="title">专题公告</p>
        <div class="description">
          <p>{{topic.description}}</p>
        </div>

        <p class="title">管理员</p>
        <div class="description">
          <img class="ava" :src="topic.picture">
          <a href="#" style="color: black">{{topic.creator}}</a>
        </div>

        <p class="title">关注的人({{topic.fans}})</p>
        <div class="description" >
            <img class="avaa" v-for="fan in fansList" :key="fan.id" :src="fan.avatar">
        </div>
      </div>

    </div>
  </div>

</template>

<script>
    import Button from "./Button";
    export default {
        name: "ZhuanTi",
      components: {Button},
      data(){
          return{
            id:this.$route.params.id,
            topic:[],
            articleList:[],
            fansList:[]
          }
      },

      activated(){
          this.id = this.$route.params.id;
        this.$http
          .get('http://localhost:8088/user/button/'+this.id)
          .then((res)=>{
            this.topic = res.data.data
          });
        this.$http
          .get('http://localhost:8088/user/button/'+this.id)
          .then((res)=>{
            this.articleList = res.data.data.articles
            this.fansList = res.data.data.fansList
          });
        // this.$http
        //   .get('http://localhost:8088/user/button/'+this.id)
        //   .then((res)=>{
        //     this.articleList = res.data.data.fansList
        //   });
      }
    }
</script>

<style scoped>
  .avaa{
    width: 24px;
    height: 24px;
    border-radius: 20px;
    float: left;
    margin-left: -5px;
  }
  .ava{
    width: 24px;
    height: 24px;
    display: block;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    float: left;
  }
  .description {
    position: relative;
    margin-bottom: 20px;
    padding: 0 0 16px;
    text-align: left;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
    clear: both;
    word-break: break-word!important;
    word-break: break-all;
  }
  .title {
    float: left;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
  }
  .picture{
    width:128px;
    height: 100px;
  }
  .icon1{
    width: 15px;
    height: 14px;
  }
  .icon2{
    width: 15px;
    height: 14px;
    margin-left: 5%;
  }
  .icon3{
    width: 16px;
    height: 15px;
    margin-left: 4%;
  }
  .amount-text{
    font-size: 12px;
    color: gray;
    margin-left: 1%;
    margin-top: -1px;
  }

  .line{
    display: flex;
  }
  .time-location{
    margin-left: 6%;
  }
  .out-set{
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 1%

  }




  .info {
    float: left;
    margin-top: 10px;
    padding-left: 0px;
    font-size: 14px;
    color: #969696;
  }
  .avatar{
    width: 100px;
    height: 100px;

  }
  .top{
    padding-top:3%;
    padding-bottom: 4%;
  }
  .name{
    font-weight: bold;font-size: 20px;margin-top: 1%;margin-left: -150px;
  }

  .out-set{
    margin-top: 10px;
    padding-left: 100px;
    font-size: 14px;
    color: #969696
  }

  .btn {
    float: left;
    margin: 30px 20px 20px 0px;
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: lawngreen;
  }

  .btn1 {
    float: left;
    margin: 30px 50px 0px 20px;
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
