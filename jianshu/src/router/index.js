import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '关注'}
        },
        {
          //关注组件
          path: '/subscriptions',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'},
          children:[
            {
              path:'/first',
              component: resolve => require(['../components/page/Notifications.vue'], resolve),
              meta: {title: '我是猪'}
            },
            {
              path:'/usOne',
              component: resolve => require(['../components/page/Users.vue'], resolve),
              meta: {title: '我是猪'},
              children:[
                {
                  path:'/fabu',
                  component: resolve => require(['../components/common/Title.vue'], resolve),
                  meta: {title: '我是猪'},
                },
                {
                  path:'/pinglun',
                  component: resolve => require(['../components/common/TitleTwo.vue'], resolve),
                  meta: {title: '我是猪'},
                }

              ]
            },
            {
              path:'/usTwo',
              component: resolve => require(['../components/page/UserTwo.vue'], resolve),
              meta: {title: '我是猪'}
            },

          ]
        },
        {
          //消息组件
          path: '/notifications',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'},
          children:[
            {
              path: '/comments',
              component: resolve => require(['../components/pinglun/PingLun.vue'], resolve),
              meta: {title: '评论'},
            },
            {
              path: '/chats',
              component: resolve => require(['../components/pinglun/JianXin.vue'], resolve),
              meta: {title: '简信'},
            },
            {
              path: '/requests',
              component: resolve => require(['../components/pinglun/TouGao.vue'], resolve),
              meta: {title: '投稿请求'},
            },
            {
              path: '/likes',
              component: resolve => require(['../components/pinglun/Like.vue'], resolve),
              meta: {title: '喜欢和赞'},
            },
            {
              path: '/follows',
              component: resolve => require(['../components/pinglun/GuanZhu.vue'], resolve),
              meta: {title: '关注'},
            },
            {
              path: '/money',
              component: resolve => require(['../components/pinglun/ZanShang.vue'], resolve),
              meta: {title: '赞赏'},
            },
            {
              path: '/others',
              component: resolve => require(['../components/pinglun/TiXing.vue'], resolve),
              meta: {title: '提醒'},
            }
          ]
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/collections',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'},
          children:[
            {
              path:'/tuijian',
              component: resolve => require(['../components/common/Collection.vue'], resolve),
              meta: {title: '推荐'}
            },
            {
              path:'/remen',
              component: resolve => require(['../components/common/CollectionTwo.vue'], resolve),
              meta: {title: '热门'}
            }
          ]
        },
        {
          //专题详情页面
          path:'/c/:id',
          component: resolve => require(['../components/common/ZhuanTi.vue'], resolve),
          meta: {title: '专题详情'}
        },
        {
          //文章详情页面
          path:'/p/:id',
          component: resolve => require(['../components/common/Essay.vue'], resolve),
          meta: {title: '文章详情'}
        },
        {
          // 个人中心组件
          path: '/u',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
        {
          // 设置
          path: '/settings',
          component: resolve => require(['../components/page/Set.vue'], resolve),
          meta: {title: '设置'},
          children:[
            {
              path: '/basic',
              component: resolve => require(['../components/common/SheZhi.vue'], resolve),
              meta: {title: '设置'},
            },
            {
              path: '/profile',
              component: resolve => require(['../components/common/GeRen.vue'], resolve),
              meta: {title: '设置'},
            }
          ]
        }
      ]
    },

    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    },
    {
      // 登陆
      path: '/sign_in',
      component: resolve => require(['../components/page/Login.vue'], resolve),
      meta: {title: '登陆'}
    },
    {
      // 注册
      path: '/sign_up',
      component: resolve => require(['../components/page/Register.vue'], resolve),
      meta: {title: '注册'}
    }
  ]
})

