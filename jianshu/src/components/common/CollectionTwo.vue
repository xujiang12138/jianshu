<template>
  <div>
    <br>
    <div class="container">
      <div class="row" >
        <div class="col-md-4" v-for="list in lists" :key="list.id">
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
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CollectionTwo",
    data(){
      return{
        lists:[
          {
            "id":1,
            "title":"爱剪辑",
            "url":"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
          },
          {
            "id":2,
            "title":"爱剪辑",
            "url":"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
          },
          {
            "id":3,
            "title":"自然科普",
            "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
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
            "title":"自然科普",
            "url":"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，..."
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
