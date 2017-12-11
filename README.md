# simple-music
简易的模仿的网易云的网页音乐播放器

## 项目介绍
这是半年前做的项目，很粗糙。不过大致还是介绍一下
当时的思路是，一个热门歌曲加歌曲详情再加上一个player界面最后带上个人中心。

技术方面还是vue全家桶，后来学习了下黄老师的音乐播放WebApp才发现差距还真的是很大。

### 歌曲详情界面
![](https://github.com/hddhyq/simple-music/raw/master/printScreens/songList.png)

这里下拉加载功能还是实现了的。每次请求６个界面

![](https://github.com/hddhyq/simple-music/raw/master/printScreens/loadingt.png)

### 歌曲详情界面和miniPlayer界面

![](https://github.com/hddhyq/simple-music/raw/master/printScreens/listDetail.png)

### 核心播放器界面
虽然没有加上歌词功能，不过当时看到有课程，就很高兴的去学习课程了

![](https://github.com/hddhyq/simple-music/raw/master/printScreens/player.png)

旋转动画效果还是不错的。

### 用户登录和用户界面
登录功能是完成了，当时很简陋，密码和账号直接上传的，什么认证都没有，连用Base64编码一下都没有，摘要认证之类的也不了解。
![](https://github.com/hddhyq/simple-music/raw/master/printScreens/login.png)

![](https://github.com/hddhyq/simple-music/raw/master/printScreens/user.png)


## 参考的一些链接
* [api接口](https://api.imjad.cn/)
* [用vue.js做一个网易云音乐](https://segmentfault.com/a/1190000008370588)
* [Vue.js 学习系列三——axios 学习实践](https://juejin.im/entry/587599388d6d810058a7a41a)
* [NeteaseCloudWebApp](https://github.com/javaSwing/NeteaseCloudWebApp)
* [VUE-AWESOME-SWIPER](https://surmon-china.github.io/vue-awesome-swiper/)
* [Vue2的移动端webApp音乐播放器](https://github.com/houbx/webApp)
* [网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi/#/)

