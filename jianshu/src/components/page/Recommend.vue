<template>
  <div>
      <div>
        <br/>
        <div>
          <b-img rounded src="//cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png" fluid alt="Responsive image" />
        </div>
      </div>
      <div>
        <div>
          <br>
          <div class="container">
            <div class="row" >
              <div class="col-md-4" v-for="list in lists" :key="list.id">
                <div  class="frame">
                  <router-link :to="'/c/' + list.id" >
                    <img class="list-img" :src="list.url">
                  <router-link to="/u"><p class="list-title">{{list.title}}</p></router-link>
                  </router-link>
                  <p class="list-context">{{list.content}}</p>
                  <button class="button">+ 关注</button>
                  <div style="margin-left: -220px" class="list-context">最近更新</div>
                  <div class="list-context" style="margin-top: -40px;border-top: 0.5px solid gainsboro">
                    <a class="new" style="margin-top: 5px">{{list.article}}</a>
                    <a class="new">{{list.articleTwo}}</a>
                    <a class="new">{{list.articleThree}}</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Recommend",
        data(){
          return{
            lists:[
              {
                "id":1,
                "title":"读书",
                "url":"https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"投稿须知:读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等",
                "number":1574,
                "likes" :3508,
                "article":"找个黄道吉日回归",
                "articleTwo":"或许是豆腐关系",
                "articleThree":"来自作者的结束语"
              },
              {
                "id":2,
                "title":"故事",
                "url":"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "number":1574,
                "likes" :3508,
                "article":"找个黄道吉日回归",
                "articleTwo":"或许是豆腐关系",
                "articleThree":"来自作者的结束语"
              },
              {
                "id":3,
                "title":"手绘",
                "url":"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "number":1574,
                "likes" :3508,
                "article":"找个黄道吉日回归",
                "articleTwo":"或许是豆腐关系",
                "articleThree":"来自作者的结束语"
              },
              {
                "id":4,
                "title":"摄影",
                "url":"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "number":1574,
                "likes" :3508,
                "article":"找个黄道吉日回归",
                "articleTwo":"或许是豆腐关系",
                "articleThree":"来自作者的结束语"
              },
              {
                "id":5,
                "title":"@IT·互联网",
                "url":"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "number":1574,
                "likes" :3508,
                "article":"找个黄道吉日回归",
                "articleTwo":"或许是豆腐关系",
                "articleThree":"来自作者的结束语"
              },
              {
                "id":6,
                "title":"自然科普",
                "url":"https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
                "content":"本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，...",
                "number":1574,
                "likes" :3508,
                "article":"找个黄道吉日回归",
                "articleTwo":"或许是豆腐关系",
                "articleThree":"来自作者的结束语"
              },
            ]
          }
        }
    }
</script>

<style scoped>
  .new {
    font-size: 13px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  .button{
    width: 100px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid white;
    background-color: limegreen;
    color: white;

  }
  .frame{
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    height: 310px;
    margin: 60px 10px 20px 20px;
    text-align: center;

  }
  .list-title{

    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  .list-img{
    margin-top: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .list-context{
    min-height: 50px;
    font-size: 13px;
    line-height: 25px;;
  }
  .list-text{
    margin-top: 40px;
    font-size: 15px;
  }
</style>
