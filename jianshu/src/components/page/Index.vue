<template>
<div class="container">
  <div class="row">
    <div class="col-md-8">
     <v-carousel></v-carousel>
      <div class="row" style="margin-top: 30px;border-bottom: 1px solid gray">
        <div class="col-md-8">
          <v-button></v-button>
        </div>
      </div>
      <div >
        <v-title></v-title>
      </div>
    </div>
    <div class="col-md-4">
      <div>
        <img  class="pic" src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png">
        <img class="pic" src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png">
        <img class="pic" src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png">
        <img class="pic" src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png">
        <img class="pic" src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png">
      </div>

      <a href="#" >
        <div style="float: left;margin-top: 20px;margin-left: 20px  ">
          <img class="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png">
        </div>
        <div  class="info" style="margin-top: 25px">
          <div class="title">下载简书手机App ><i class="iconfont ic-link"></i></div>
          <div class="description">随时随地发现和创作内容</div>
        </div>
      </a>

      <div  class="title" style="margin-top: 30px">
        <span style="margin-left: -200px">推荐作者</span><font-awesome-icon icon="coffee" style="font-size: 20px" />
        <span style="float: right">换一批</span>
      </div>
      <div>
        <v-list></v-list>
      </div>
      <router-link to="/recommend">
        <a href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="find-more">
          查看全部<i class="iconfont ic-link"></i></a>
      </router-link>

    </div>

  </div>
</div>
</template>

<script>
  import vCarousel from '../common/Carousel.vue'
  import vButton from '../common/Button.vue'
  import vTitle from '../common/Title'
  import vList from '../common/List'
    export default {
        name: "Index",
      components:{
          vCarousel,
        vButton,
        vTitle,
        vList
      }
    }
</script>

<style scoped>
  .pic{
    width: 100%;
    margin-bottom: 6px;
    border-radius: 4px;
  }
  .pic{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }

  .qrcode {
     width: 60px;
     height: 60px;
     opacity: .85;

   }

  .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
  }

  .find-more {
    position: absolute;
    padding: 7px 7px 7px 12px;
    margin-top: 20px;
    left: 60px;
    width: 80%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }

</style>
