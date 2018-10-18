<template>
 <div>
   <table>
     <tr><td class="top-line setting-title setting-verticle">
       性别
     </td> <td class="top-line"><input type="radio" value="1"> <span>男</span> <input type="radio" value="2"> <span>女</span> <input type="radio" value="0"> <span>保密</span></td></tr>
     <tr><td class="setting-title ">个人简介</td> <td><form style="width: 100%"><textarea placeholder="填写你的个人简介"></textarea></form></td></tr>
     <tr><td class="setting-title ">个人网站</td> <td><form><input type="text" name="website" placeholder="http://你的网址"> <p class="pull-right">填写后会在个人主页显示图标</p></form></td></tr>
     <tr><td class="setting-title">微信二维码</td> <td>  <button class="btn">更换图片</button></td></tr>
     <tr><td class="setting-title setting-input pull-left">社交帐号</td> <td class="social-bind"><p>你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p> <p>如果帐号被占用，你可以在<a href="/p/eea64a29cf9d">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</p> <ul class="social-bind-list"><li><div class="bind-name"><i class="iconfont ic-weibo"></i> <a href="/users/auth/weibo?can_transfer=true">绑定微博<i class="iconfont ic-arrow"></i></a></div></li><li class="has-bind"><div class="bind-name"><i class="iconfont ic-wechat"></i> <i class="iconfont ic-collections-followed"></i> <span>已绑定</span> <a class="cancel-bind">解除绑定</a></div> <!----></li><li class="has-bind"><div class="bind-name"><i class="iconfont ic-qq_connect"></i> <i class="iconfont ic-collections-followed"></i> <span>已绑定</span> <a class="cancel-bind">解除绑定</a></div> <!----></li><li><div class="bind-name"><i class="iconfont ic-douban"></i> <a href="/users/auth/douban?can_transfer=true">绑定豆瓣<i class="iconfont ic-arrow"></i></a></div></li><li><div class="bind-name"><i class="iconfont ic-google_oauth2"></i> <a href="/users/auth/google_oauth2?can_transfer=true">绑定 Google+<i class="iconfont ic-arrow"></i></a></div></li></ul></td></tr>
   </table>
   <div>
     <button class="btn" style="margin-left: 150px">点击保存</button>
   </div>
 </div>
</template>

<script>
    export default {
        name: "GeRen"
    }
</script>

<style scoped>
  .setting-save {
    width: 100px;
    margin: 30px 0 60px;
    border-radius: 20px;
    border: none;
    float: left;
  }
  .setting-verticle {
    font-size: 15px;
    color: #969696;
    width: 100px;
  }

  .pull-left {
    float: left!important;
  }

  .setting-title {
    font-size: 20px;
    color: #969696;
    width: 150px;
  }

  .btn {
    float: left;
    margin: 30px 50px 50px 20px;
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: lawngreen;
  }
  .avatar{
    border-radius: 50px;
  }

  td{
    display: table-cell;
    vertical-align: inherit;
  }

  table tr td{
    padding-top: 40px;
    padding-left: 40px;

  }
</style>
