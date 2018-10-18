<template>
    <div>
      <h1>{{titles.title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "essay",
      data(){
          return{
            id:this.$route.params.id,
            titles:[],
            essayList:[]
          }
      },
      activated(){
          this.id = this.$route.params.id
          if (this.id=1) {
            var t ={
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
              }
            };
          this.titles = t;
          this.essayList = t.essayList;
          }
    }
</script>

<style scoped>

</style>
