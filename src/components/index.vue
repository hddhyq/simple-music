<template>
  <div>
    <div class="fixed-bar">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="mymusic" title="我的音乐"/>
        <mu-tab value="singlefm" title="私人FM"/>
        <mu-tab value="songlist" title="歌单推荐"/>
      </mu-tabs>
    </div>
    <div class="default-view" :class="{view: songList.length > 0}">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    data () {
      return {
        activeTab: 'mymusic'
      };
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      var tmpArr = this.$route.path.split('/');
      if (tmpArr[1] === 'index') {
        this.handleTabChange(tmpArr[2]);
      }
    },
    watch: {
      // watch函数监测路由的变化,保持tab面板的高亮位置正确
      '$route' (to, from) {
        const path = to.path;
        var tmpArr = path.split('/');
        if (tmpArr[1] === 'index') {
          this.handleTabChange(tmpArr[2]);
        }
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
        this.$router.push({path: '/index/' + val});
      }
    },
    computed: {
      ...mapGetters([
        'songList'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fixed-bar
    position: fixed
    width: 100%
    top: 0
    left: 0
    z-index: 15
    .mu-tabs
      background: #ce3d3e
      color: #fff
      .mu-tab-link-highlight
        background: #ddd

  .view
    margin-bottom: 2.3rem
</style>
