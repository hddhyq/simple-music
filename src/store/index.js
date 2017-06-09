import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    audio: {
      'id': 0,
      'name': '歌曲信息',
      'singer': '演唱者',
      'albumPic': '/static/player-bar.png',
      'location': '',
      'album': ''
    },
    lyric: '',
    currentIndex: 0, // 当前播放的歌曲位置
    playing: false, // 正在播放？
    loading: false, // 正在加载？
    showDetail: false,
    songList: [], // 播放列表
    currentTime: 0,
    tmpCurrentTime: 0, // 临时播放时间
    durationTime: 0, // 持续时间
    bufferedTime: 0, // 缓冲时间
    change: false // 判断是更改的时间还是播放的时间
  },
  getters: {
    audio: state => state.audio,
    playing: state => state.playing,
    loading: state => state.loading,
    showDetail: state => state.showDetail,
    durationTime: state => state.durationTime,
    currentIndex: state => state.currentIndex,
    bufferedTime: state => state.bufferedTime,
    tmpCurrentTime: state => state.tmpCurrentTime,
    songList: state => state.songList,
    change: state => state.change,
    currentTime: state => state.currentTime,
    prCurrentTime: state => {
      return state.currentTime / state.durationTime * 100;
    },
    prBufferedTime: state => {
      return state.bufferedTime / state.durationTime * 100;
    }
  },
  mutation: {
    play (state) {
      state.playing = true;
    },
    pause (state) {
      state.playing = false;
    },
    toggleDetail (state) {
      state.showDetail = !state.showDetail;
    },
    setAudio (state) {
      state.audio = state.songList[state.currentIndex - 1];
    },
    setAudioIndex (state, index) {
      state.audio = state.songList[index];
      state.currentIndex = index + 1;
    },
    removeAudio (state, index) {
      state.songList.splice(index, 1);
      if (index === state.songList.length) {
        index--;
      }
      state.audio = state.songList[index];
      state.currentIndex = index + 1;
      if (state.songList.length === 0) {
        state.audio = {
          'id': 0,
          'name': '歌曲名称',
          'singer': '演唱者',
          'albumPic': '/static/player-bar.png',
          'location': '',
          'album': ''
        };
        state.playing = false;
      }
    },
    setChange (state, flag) {
      state.change = flag;
    },
    setLocation (state, location) {
      state.audio.location = location;
    },
    updateCurrentTime (state, time) {
      state.currentTime = time;
    },
    updateDurationTime (state, time) {
      state.durationTime = time;
    },
    updateBufferedTime (state, time) {
      state.bufferedTime = time;
    },
    changeTime (state, time) {
      state.tmpCurrentTime = time;
    },
    openLoading (state) {
      state.loading = true;
    },
    closeLoading (state) {
      state.loading = false;
    },
    resetAudio (state) {
      state.currentTime = 0;
    },
    playNext (state) {
      state.currentIndex++;
      if (state.currentIndex > state.songList.length) {
        state.currentIndex = 1;
      }
      state.audio = state.songList[state.currentIndex - 1];
    },
    addToList (state, songs) {
      var items = Array.prototype.concat.call(songs);
      items.forEach(item => {
        var flag = false;
        state.songList.forEach(function (element, index) { // 检测歌曲重复
          if (element.id === item.id) {
            flag = true;
            state.currentIndex = index + 1;
          }
        });
        if (!flag) {
          state.songList.push(item);
          state.currentIndex = state.songList.length;
        }
      });
    },
    setLrc (state, lrc) {
      state.lyric = lrc;
    }
  }

});
export default store;
