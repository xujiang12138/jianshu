<template>
  <div class="all">
    <div class="title">{{topic.topicName}}</div>
    <div class="center">
      <img class="img" :src="topic.topicUrl">
      <a class="name">{{topic.writer}}</a>
      <button class="button"><a class="follow">+ 关注</a></button><br>
      <span>{{topic.time}}</span>
      <span>字数 {{topic.articleCount}}</span>
      <span>阅读 {{topic.read}}</span>
      <span>喜欢 {{topic.fans}}</span>
    </div>
    <div class="article">
      <a>{{topic.description}}</a>
    </div>
    <img class="picture" src="https://upload-images.jianshu.io/upload_images/12209441-43b1b1acbae3695a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp">
    <div style="height: 200px;"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        // articleList: [],
        // fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "在支教中我学到了什么？",
          "topicUrl": "https://upload.jianshu.io/users/upload_avatars/13365956/5a3f2f18-9fcf-4e95-9575-39a22ba4707d?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
          "writer":"妖妖様",
          "time": "2018.07.29 14:32",
          "articleCount": 890,
          "read": 1150,
          "fans": 1601,
          "description":"先说一下我的情况吧，我今年26岁，报社的一名实习编辑，因为经常加班的缘故，一日三餐非常不规律，加上我本人又比较喜欢吃那些油比较重的东西，所以很快就胖到了108斤。 \r\n" +
          "其实108的体重对于我来说并不算胖，因为我身高有172，所以还算正常水平。但很悲剧的是我所有的脂肪都集中在上半身（手臂和肩膀之类的地方），导致整个人看起来有种虎背熊腰的感觉。所以从去年六月开始我就决定，一定要减肥！\r\n" +
          "刚开始我并没有定过什么计划，本身也比较懒，所以我用的第一个方法就是节食。不得不说，短期来看，节食是很有效果的，差不多半个月我就瘦到了103斤。虽然体重是减轻了，但是视觉上看来，那种虎背熊腰的感觉还在，而且对一个吃货而言，不能吃好吃的这种折磨实在是太痛苦了！所以我很快就放弃了。 \r\n",
        };
        this.topic = t;
        // this.articleList = t.articleList;
        // this.fansList = t.fansList;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>
  .all{
    max-width: 600px;
    margin-left: 250px;
    margin-top: 30px;
  }
  .title{
    font-weight: bold;
    font-size: 35px;
  }
  .center{
    margin-top: 20px;
  }
  .button{
    width: 60px;
    height: 25px;
    border-radius: 30px;
    border: 1px solid white;
    background-color: limegreen;
    color: white;
    margin-left: 10px;
  }
  .follow{
    font-size: 12px;
  }
  .img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
  }
  span{
    font-size: 15px;
    color: grey;
    margin-left: 15px;
  }
  .name{
    padding-left: 15px;
  }
  .article{
    margin-top: 20px;
  }
  .picture{
    width: 700px;
    height: 400px;
    margin-left: -50px;
    margin-top: 30px;
  }
</style>

<!--<template>-->
    <!--<div>-->
      <!--<h1>{{titles.title}}</h1>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: "essay",-->
      <!--data(){-->
          <!--return{-->
            <!--id:this.$route.params.id,-->
            <!--titles:[],-->
            <!--essayList:[]-->
          <!--}-->
      <!--},-->
      <!--activated(){-->
          <!--this.id = this.$route.params.id-->
          <!--if (this.id=1) {-->
            <!--var t ={-->
                <!--"id":1,-->
                <!--"title":"大猪蹄子",-->
                <!--"content":"风萧萧兮易水寒，壮士一去兮不复还",-->
                <!--"url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",-->
                <!--"Writer":"小包有前途",-->
                <!--"avatar":"//upload.jianshu.io/users/upload_avatars/4595211/b0efbe1c-e03c-4b26-b6bf-854b87a91e00.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",-->
                <!--"like":778,-->
                <!--"words":1515,-->
                <!--"read":1466,-->
                <!--"comments":2014,-->
                <!--"admire":123,-->
                <!--"essayList":[-->
                  <!--{-->
                    <!--"id":1,-->
                    <!--"url":"1.png",-->
                    <!--"name":"愚者",-->
                    <!--"time":"2018.09.23 14:51",-->
                    <!--"content":"不不不不不不不不不不不不。",-->
                    <!--"赞赏":61-->
                  <!--},-->
                  <!--{-->
                    <!--"id":2,-->
                    <!--"url":"1.png",-->
                    <!--"name":"愚者",-->
                    <!--"time":"2018.09.23 14:51",-->
                    <!--"content":"不不不不不不不不不不不不。",-->
                    <!--"赞赏":61-->
                  <!--},-->
                  <!--{-->
                    <!--"id":3,-->
                    <!--"url":"1.png",-->
                    <!--"name":"愚者",-->
                    <!--"time":"2018.09.23 14:51",-->
                    <!--"content":"不不不不不不不不不不不不。",-->
                    <!--"赞赏":61-->
                  <!--},-->
                  <!--{-->
                    <!--"id":4,-->
                    <!--"url":"1.png",-->
                    <!--"name":"愚者",-->
                    <!--"time":"2018.09.23 14:51",-->
                    <!--"content":"不不不不不不不不不不不不。",-->
                    <!--"赞赏":61-->
                  <!--},-->
                  <!--{-->
                    <!--"id":5,-->
                    <!--"url":"1.png",-->
                    <!--"name":"愚者",-->
                    <!--"time":"2018.09.23 14:51",-->
                    <!--"content":"不不不不不不不不不不不不。",-->
                    <!--"赞赏":61-->
                  <!--}-->
                <!--]-->
              <!--}-->
            <!--};-->
          <!--this.titles = t;-->
          <!--this.essayList = t.essayList;-->
          <!--}-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
