<template>
  <div>
    <table>
      <tr>
        <td >
          <div >
            <img class="avatar" src="//upload.jianshu.io/users/upload_avatars/12234015/9c4837b3-008a-48f3-a0b4-bfc94f6c01b4?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300/format/webp">
          </div>
        </td>
        <td >
          <button class="btn">更改头像</button>
        </td>
      </tr>
      <tr style="padding-top: 20px"><td class="setting-title">
        昵称
      </td> <td><input type="text" placeholder="请输入昵称"></td></tr>
      <tr><td class="setting-title">电子邮件</td> <td><button class="btn btn-hollow">点击绑定</button> <!----></td></tr>
      <tr><td class="setting-title">手机</td> <td class="setted"><div>139****7503</div> <i class="iconfont ic-collections-followed"></i> <span>已验证</span> <a class="cancel-bind">解除绑定</a></td></tr>
      <tr><td class="setting-title setting-editor">常用编辑器</td> <td><div class="col-xs-8" style="float: right"><input type="radio" value="plain"> <span>富文本</span></div> <div class="col-xs-16"><input type="radio" value="markdown"> <span>Markdown <a href="/p/q81RER" target="_blank" class="help"><i class="iconfont ic-navigation-help"></i></a></span></div> <p>切换后对新建文章生效</p></td></tr>
      <tr><td class="setting-verticle">语言设置</td> <td><div class="col-xs-8" style="float: right"><input type="radio" value="zh-CN"> <span>中文简体</span></div> <div class="col-xs-16"><input type="radio" value="zh-TW"> <span>中文繁体</span></div></td></tr>
      <tr><td class="setting-title setting-verticle">接收谁的简信</td> <td><div class="col-xs-8" style="float: right"><input type="radio" value="true"> <span class="responsive-span">所有人</span></div> <div class="col-xs-16"><input type="radio" value="false"> <span class="responsive-span">我关注的人、我发过简信的人</span></div></td></tr>
      <tr><td class="setting-title setting-verticle">提醒邮件通知</td> <td><div class="col-xs-8" style="float: right"><input type="radio" value="instantly"> <span class="responsive-span">所有动态</span></div> <div class="col-xs-11"><input type="radio" value="later"> <span class="responsive-span">每天未读汇总</span></div> <div class="col-xs-5"><input type="radio" value="none"> <span class="responsive-span">不接收</span></div></td></tr>
    </table>
    <div style="float: left">
      <input type="submit" class="btn btn-success setting-save" value="保存">
    </div>
  </div>

</template>

<script>
    export default {
        name: "SheZhi"
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
  }

  .setting-title {
    font-size: 15px;
    color: #969696;
  }

  .btn {
    float: right;
    margin: 50px 0 23px 20px;
    font-size: 14px;
    padding: 8px 16px;
    border: 1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: none;
  }
  .avatar{
    border-radius: 50px;
  }

  td{
    display: table-cell;
    vertical-align: inherit;
  }

  table tr td{
    padding-top: 20px;

  }
</style>
