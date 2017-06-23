<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">全部歌单</div>
      <mu-flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
        <mu-flexbox-item basis="40%" class="list-item"
                         :key="item.id" v-for="item in playList">
          <router-link :to="{name: 'playListDetail',
          params: {id: item.id, name: item.name,
          coverImg: item.coverImgUrl,creator: item.creator,
          count: item.playCount, desc: item.description }}">
            <div class="list-bar">{{item.playCount | formatCount}}</div>
            <img class="list-img img-response"
                 :src="item.coverImgUrl + '?param=300y300'" lazy="loading">
            <div class="list-name">{{item.name}}</div>
          </router-link>
        </mu-flexbox-item>
      </mu-flexbox>
      <mu-infinite-scroll :scroller="scroller" :loading="loading"
                          @load="loadMore"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../../api/index';

  export default {
    name: 'songlist',
    data () {
      return {
        scroller: null,
        playLists: [],
        playList: [],
        offset: 12,
        loading: false
      };
    },
    created () {
      this.get();
    },
    mounted () {
      this.scroller = this.$el;
    },
    methods: {
      get () {
        this.loading = true;
        this.$http.get(api.getPlayListByWhere('全部', 'hot', this.offset, true, 6)).then((res) => {
          var total = res.data.total;
          var list = (res.data.playlists);
          for (let i = 0; i < list.length; i++) {
            this.playList.push(list[i]);
          }
          this.offset = this.offset + 6;
          if (this.offset > total) {
            this.offset = total;
          }
          this.loading = false;
        });
      },
      loadMore () {
        this.get();
      }
    },
    filters: {
      formatCount (v) {
        if (v < 100000) {
          return v;
        } else {
          return parseInt(v / 10000) + '万';
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .img-response
    max-width: 100%
    height: auto

  .wrapper
    width: 100%
    height: 100vh
    padding: 0 10px
    overflow: auto
    -webkit-overflow-scrolling: touch
    .title
      margin: 4px 0 6px 0
      padding: 4px
      border-left: 2px solid #ce3d3e
    .list
      &-bar
        position: absolute
        top: 0
        left: 0
        color: #fff
        width: 100%
        text-align: right
        padding: 2px 5px
        background-color: rgba(0, 0, 0, 0.2)
      &-item
        position: relative
        margin: 0 5px 5px 10px
      &-img[lazy=loading]
        background: url('../../../static/default_cover.png') no-repeat
        background-size: cover
      &-name
        height: 40px
        overflow: hidden
        color: #000
        text-overflow: ellipsis
    .mu-circle-spinner
      border-color: #ce3d3e

</style>
