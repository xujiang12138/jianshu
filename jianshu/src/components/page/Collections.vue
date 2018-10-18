<template>
  <div>
    <div>
      <br>
      <div>
        <b-img rounded src="//cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png" fluid alt="Responsive image" />
      </div>
      <br>
      <div>
        <b-nav tabs>
          <b-nav-item ><router-link to="tuijian">推荐</router-link></b-nav-item>
          <b-nav-item><router-link to="remen">热门</router-link></b-nav-item>
          <b-nav-item>城市</b-nav-item>
          <b-nav-item>校园</b-nav-item>
        </b-nav>
      </div>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>


</template>

<script>
  import vCollection from '../common/Collection'
  export default {
    name: "Collections",
    components:{
      vCollection
    }
  }
</script>

<style scoped>

</style>

