<template>
  <div>
    <div><p>全部简信</p></div>
    <div class="line"></div>

    <div>
      <div class="row" v-for="list in lists" :key="list.id">
        <div style="float: left;margin-top: 20px;margin-left: 20px  ">
          <img class="avatar img-circle" :src="list.url">
        </div>
        <div style="margin-top:20px;padding-left: 10px">
          <a>{{list.name}}</a>
          <div class="text" style="float: right">{{list.time}}</div>
          <div class="text">{{list.content}}</div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "JianXin",
    data(){
      return{
        lists:[
          {
            "id":1,
            "url":"//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "time" :"09.07 9:35",
            "name":"贾宝玉",
            "content":"欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看"
          },
          {
            "id":2,
            "url":"//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "time" :"09.07 9:35",
            "name":"某某某",
            "content":"欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看"
          },
          {
            "id":3,
            "url":"//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "time" :"09.07 9:35",
            "name":"某某某",
            "content":"欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看"
          },
          {
            "id":4,
            "url":"//upload.jianshu.io/users/upload_avatars/3678149/b8a58e70-1126-48c9-97e2-8f21a31dfa94.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
            "time" :"09.07 9:35",
            "name":"某某某",
            "content":"欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  p{
    font-size: 15px;
    font-weight: bold;
  }
  .line{
    border: .5px solid lightgrey;
  }

  /*.title span {*/
  /*font-size: 14px;*/
  /*color: #969696;*/
  /*}*/

  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid lightgrey;
    border-radius: 50px;
  }
  .text{
    color:darkgrey;
    font-size: 13px;
  }

</style>
