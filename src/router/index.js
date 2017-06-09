import Vue from 'vue';
import Router from 'vue-router';
import mymusic from '../components/mymusic/mymusic';
import singlefm from '../components/singlefm/singlefm';
import songlist from '../components/songlist/songlist';
import index from '../components/index';
import playerDetail from '../components/playerDetail/playerDetail';
import playListDetail from '../components/playListDetail/playListDetail';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: 'mymusic',
        name: 'mymusic',
        component: mymusic
      },
      {
        path: 'singlefm',
        name: 'singlefm',
        component: singlefm
      },
      {
        path: 'songlist',
        name: 'songlist',
        component: songlist
      }
    ]
  }, {
    path: '/playerDetail/:id',
    name: 'playerDetail',
    component: playerDetail
  }, {
    path: '/playListDetail/:id',
    name: 'playListDetail',
    component: playListDetail
  }, {
    path: '*', redirect: '/index/mymusic'
  }
  ]
});
