<template>
  <div>
    <div class="row"  v-for="title in titles" :key="title.id" style="margin-top: 20px;border-bottom: 1px solid gray">

      <div class="col-md-8">
        <router-link :to="'/p/'+title.id">
          <a href="#"><div   class="title">{{title.title}}</div></a>
        </router-link>
        <div style="margin-left: 10px" class="abstract">{{title.content}}</div>
        <div class="row" style="margin-left: 10px">
          <a class="abstract">{{title.writer}}</a>
         <img  class="icon2" src="http://p88kzenjw.bkt.clouddn.com/message.png"> <a  style="margin-left: 10px" class="abstract">{{title.words}}</a>
          <img class="icon3" src="http://p88kzenjw.bkt.clouddn.com/like.png"/><a  class="abstract" style="margin-left: 20px">{{title.like}}</a>
        </div>
      </div>
      <div class="col-md-4" >
        <img style="width: 100px;height: 80px" :src="title.url">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Title",
      data(){
          return {
            titles:[
              {
                "id":1,
                "title":"在支教中我学到了什么？",
                "content":"\n" +
                "      让晨曦在湛蓝的天空下升起 晨曦是夜幕的风铃，摇响破晓的号角，晨曦是宇宙的种子，给万物留下生机，晨曦是鲜活的舞者，让青春充满希冀...\n" +
                "    ",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",

                "avatar":"//upload.jianshu.io/users/upload_avatars/4595211/b0efbe1c-e03c-4b26-b6bf-854b87a91e00.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
                "like":778,
                "words":1515,
                "read":1466,
                "comments":2014,
                "admire":123,
                "writer":"小包有前途",
                "essayList":[
                  {
                  "id":1,
                    "url":"1.png",
                    "name":"愚者",
                    "time":"2018.09.23 14:51",
                    "content":"不不不不不不不不不不不不。",
                    "赞赏":61
                  },
                  {
                    "id":2,
                    "url":"1.png",
                    "name":"愚者",
                    "time":"2018.09.23 14:51",
                    "content":"不不不不不不不不不不不不。",
                    "赞赏":61
                  },
                  {
                    "id":3,
                    "url":"1.png",
                    "name":"愚者",
                    "time":"2018.09.23 14:51",
                    "content":"不不不不不不不不不不不不。",
                    "赞赏":61
                  },
                  {
                    "id":4,
                    "url":"1.png",
                    "name":"愚者",
                    "time":"2018.09.23 14:51",
                    "content":"不不不不不不不不不不不不。",
                    "赞赏":61
                  },
                  {
                    "id":5,
                    "url":"1.png",
                    "name":"愚者",
                    "time":"2018.09.23 14:51",
                    "content":"不不不不不不不不不不不不。",
                    "赞赏":61
                  }
                ]
              },
              {
                "id":2,
                "title":"她是自愿的",
                "like":778,
                "words":1515,
                "read":1466,
                "comments":2014,
                "admire":123,
                "writer":"小包有前途",
                "content":"\n" +
                "      2017年10月开始，女星Alyssa Milano等人率先发声，一场关于性侵的运动引起社会关注，呼吁所有曾遭受性侵犯的女性挺身而出说出惨痛经历...\n" +
                "    ",
                "url":"//upload-images.jianshu.io/upload_images/2291197-3e5076ff1e667aad?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              },
              {
                "id":3,
                "like":778,
                "words":1515,
                "read":1466,
                "comments":2014,
                "admire":123,
                "writer":"小包有前途",
                "title":"女人们应该嫁什么样的男人呢？",
                "content":"\n" +
                "      女人们应该嫁什么样的男人呢？综艺节目里朱妈妈的观点：把儿媳当第二个妈用，并且要全身心扑到她老人家的儿子身上让人乍舌不已。。。 什么年代...\n" +
                "    ",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              },
              {
                "id":4,
                "like":778,
                "words":1515,
                "read":1466,
                "comments":2014,
                "admire":123,
                "writer":"小包有前途",
                "title":"大猪蹄子",
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              },
              {
                "id":5,
                "title":"大猪蹄子",
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              },
              {
                "id":6,
                "title":"大猪蹄子",
                "like":778,
                "words":1515,
                "read":1466,
                "comments":2014,
                "admire":123,
                "writer":"小包有前途",
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .icon2{
    width: 15px;
    height: 14px;
    margin-left: 5%;
    margin-top: 1%;
  }
  .icon3{
    width: 15px;
    height: 14px;
    margin-left: 4%;
    margin-top: 1%;
  }
  .title {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: black;
    margin-left: -200px;
  }

   .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
</style>
