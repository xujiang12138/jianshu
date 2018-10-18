<template>
  <div>
    <div class="row"  v-for="title in titles" :key="title.id" style="margin-top: 20px;border-bottom: 1px solid gray">
      <div class="col-md-8">
        <a href="#"><div  style="margin-left: 10px;font-size: 20px" class="row">{{title.title}}</div></a>
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
    name: "TitleTwo",
    data(){
      return {
        titles:[
          {
            "id":1,
            "title":"月基本",
            "content":"风萧萧兮易水寒，壮士一去兮不复还",
            "url":"//upload-images.jianshu.io/upload_images/5315387-5272c50242b2f7d8.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          },
          {
            "id":2,
            "title":"月基本",
            "content":"风萧萧兮易水寒，壮士一去兮不复还",
            "url":"//upload-images.jianshu.io/upload_images/5315387-5272c50242b2f7d8.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          },
          {
            "id":3,
            "title":"月基本",
            "content":"风萧萧兮易水寒，壮士一去兮不复还",
            "url":"//upload-images.jianshu.io/upload_images/5315387-5272c50242b2f7d8.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          },
          {
            "id":4,
            "title":"月基本",
            "content":"风萧萧兮易水寒，壮士一去兮不复还",
            "url":"//upload-images.jianshu.io/upload_images/5315387-5272c50242b2f7d8.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          },
          {
            "id":5,
            "title":"月基本",
            "content":"风萧萧兮易水寒，壮士一去兮不复还",
            "url":"//upload-images.jianshu.io/upload_images/5315387-5272c50242b2f7d8.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240/format/webp"
          },
          {
            "id":6,
            "title":"月基本",
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
