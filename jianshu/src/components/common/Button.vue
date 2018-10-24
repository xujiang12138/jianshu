<template>
  <div>
    <a class="coll" v-for="but in buttonList" :key="but.id" >
      <router-link :to="'/c/'+but.id">
        <img  class="pic2" :src="but.topicurl">
        <div class="name">{{but.topicname}}</div>
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
          buttonList:[]
          }
      },
      created(){
          var that = this
        this.$http
          .get('http://localhost:8088/user/button')
          .then(function (response) {
            that.buttonList = response.data.data;

          })
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
