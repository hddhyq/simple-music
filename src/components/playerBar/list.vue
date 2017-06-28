<template>
  <div>
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet ">
      <div class="title-wrapper">
        播放列表（{{songList.length}}）
      </div>
      <hr class="mu-divider">
      <div class="list-wrapper">
        <div class="list-item" :class="{on: item.id == audio.id}" v-for="(item, index) in songList">
          <div class="left" @click="play(index)">
            <span class="list-name">{{item.name}}</span> <span class="list-singer">&nbsp;-{{item.singer}}&nbsp;</span>
          </div>
          <span class="list-btn" @click="remove(index)">x</span>
          <hr class="mu-divider">
        </div>
      </div>
    </mu-bottom-sheet>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    data () {
      return {
        bottomSheet: false
      };
    },
    methods: {
      closeBottomSheet () {
        this.bottomSheet = false;
        if (document.querySelector('.playList')) {
          document.querySelector('.playList').style.position = 'static';
        }
      },
      show () {
        this.bottomSheet = true;
        if (document.querySelector('.playList')) {
          document.querySelector('.playList').style.position = 'fixed';
        }
      },
      play (index) {
        this.$store.commit('setAudioIndex', index);
      },
      remove (index) {
        console.log(index);
        this.$store.commit('removeAudio', index);
      }
    },
    computed: {
      ...mapGetters([
        'songList',
        'audio'
      ])
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .title-wrapper
    font-size: 16px
    height: 2rem
    line-height: 2rem
    color: rgba(0, 0, 0, .87)
    text-align: center

  .list-wrapper
    height: 10rem
    width: 100%
    padding: 0 10px
    overflow: auto
    -webkit-overflow-scrolling: touch
    .list-item
      height: 2rem
      line-height: 2rem
      .left
        max-width: 92%
        float: left
        height: 2rem
        overflow: hidden
        .list-name
          float: left
          max-width: 72%
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .list-singer
          color: #737171
          font-size: 12px
      .list-btn
        width: 32px
        text-align: center
        float: right
        color: #737171

  .on
    color: #ce3d3e
    .list-singer
      color: #ce3d3e
</style>
