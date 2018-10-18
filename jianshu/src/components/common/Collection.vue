<template>
  <div>
    <br>
    <div class="container">
      <div class="row" >
        <div class="col-md-4" v-for="list in lists" :key="list.id">
          <router-link :to="'/c/'+list.id">
            <b-card :title="list.title"
                    :img-src="list.url"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
              <p class="card-text">
                {{list.content}}
              </p>
              <b-button href="#" variant="primary">+关注</b-button>
            </b-card>
          </router-link>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Collection",
      data(){
          return{
            lists:[
              {
                "id":1,
                "title":"读书",
                "url":"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"\n" +
                "  投稿须知:\n" +
                "    读书专题仅收录与读书有关的书评、读书笔记..."
              },
              {
                "id":2,
                "title":"摄影",
                "url":"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台..."
              },
              {
                "id":3,
                "title":"简书电影",
                "url":"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台..."
              },
              {
                "id":4,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":5,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":6,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":7,
                "title":"旅行在路上",
                "url":"//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。\n" +
                "1.投稿请查看..."
              },
              {
                "id":8,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
              {
                "id":9,
                "title":"自然科普",
                "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
              },
            ]


          }
      }
    }
</script>

<style scoped>
</style>
