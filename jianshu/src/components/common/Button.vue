<template>
  <div>
    <a class="coll" v-for="but in buttonList" :key="but.id" >
      <router-link :to="'/c/'+but.id">
        <img  class="pic2" :src="but.url">
        <div class="name">{{but.text}}</div>
      </router-link>
    </a>
    <a ><router-link to="collections">更多热门专题</router-link></a>
  </div>

</template>

<script>
    export default {
        name: "Button",
      data(){
          return{
            buttonList:[
              {
                "id":1,
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"读书"
              },
              {
                "id":2,
                "url":"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"@IT·互联网"
              },
              {
                "id":3,
                "url":"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"摄影"
              },
              {
                "id":4,
                "url":"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"故事"
              },
              {
                "id":5,
                "url":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"简书电影"
              },
              {
                "id":6,
                "url":"//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"旅行·在路上"
              },
              {
                "id":7,
                "url":"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
                "text":"手绘"
              },
            ]
          }

      }
    }
</script>

<style scoped>
  .coll{
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }

  .name{
    display: inline-block;
    margin-left: -5px;
    padding: 0px;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    color: black;
  }

  .pic2{
    width: 32px;
    height: 32px;
    vertical-align: middle;
    border: 0;
    margin: 0px;
    padding: 0px;
  }
</style>
