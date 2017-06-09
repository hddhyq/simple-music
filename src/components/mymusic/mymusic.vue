<template>
  <div class="wrapper">
    <div class="user-login" v-show="userLog">
      <div class="user-wrapper">
        <mu-text-field hintText="请输入手机号" v-model="cellphone"/>
        <br/>
        <mu-text-field hintText="请输入密码" type="password" v-model="password"/>
        <br/>
        <mu-raised-button label="登录" @click="submit"/>
      </div>
    </div>
    <div class="my-music-wrapper" v-show="!userLog"
         :style="{backgroundImage: getBackgroundImage}">
      <mu-avatar :src="userInfo.avatarUrl"/>
      <div class="user-name">
        {{userInfo.nickname}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../api/index';

  export default {
    name: 'mymusic',
    data () {
      return {
        cellphone: '',
        password: '',
        userInfo: {},
        userLog: true,
        uid: 0
      };
    },
    methods: {
      submit () {
        this.$http.get(api.getLogin(this.cellphone, this.password)).then((response) => {
          response = response.data;
          if (response.code === 200) {
            this.userInfo = Object.assign({}, this.userInfo, response.profile);
            this.userLog = false;
            this.uid = this.userInfo.userId;
            this.$http.get(api.getPlayList(this.uid)).then((response) => {
              response = response.data;
            });
          }
        });
      }
    },
    computed: {
      getBackgroundImage () {
        return `url(${this.userInfo.backgroundUrl})`;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrapper
    margin-top: 48px
    .user-wrapper
      text-align: center
      color: #fff
      .mu-ripple-wrapper
        color: #fff
      .mu-text-field-focus-line
        background-color: #ce3d3e
      .mu-raised-button-wrapper
        background-color: #ce3d3e
        color: #fff

    .my-music-wrapper
      position: relative
      width: 100%
      height: 200px
      text-align: center
      background-repeat: no-repeat
      background-size: 100% 200px
      z-index: -1
      .mu-avatar
        margin-top: 40px
        height: 80px
        width: 80px
      .user-name
        padding-top: 5px
        color: #fff
        font-weight: 500
</style>
