<template>
  <div>
    <div class="row"  v-for="title in titles" :key="title.id" style="margin-top: 20px;border-bottom: 1px solid gray">

      <div class="col-md-8">
        <router-link :to="'/p/'+title.id">
          <a href="#"><div  style="margin-left: 10px;font-size: 20px" class="row">{{title.title}}</div></a>
        </router-link>
        <div style="margin-left: 10px" class="row">{{title.content}}</div>
        <div class="row" style="margin-left: 10px">
          <a>作者</a>
          <a  style="margin-left: 10px" class="glyphicon glyphicon-circle-arrow-down">121</a>
          <a  class="glyphicon glyphicon-random" style="margin-left: 20px">12</a>
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
                "title":"大猪蹄子",
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
                "Writer":"小包有前途",
                "avatar":"//upload.jianshu.io/users/upload_avatars/4595211/b0efbe1c-e03c-4b26-b6bf-854b87a91e00.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
                "like":778,
                "words":1515,
                "read":1466,
                "comments":2014,
                "admire":123,
                "essaylist":[
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
                "title":"大猪蹄子",
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              },
              {
                "id":3,
                "title":"大猪蹄子",
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              },
              {
                "id":4,
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
                "content":"风萧萧兮易水寒，壮士一去兮不复还",
                "url":"//upload-images.jianshu.io/upload_images/9952289-dbe74fb8d340bc02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
