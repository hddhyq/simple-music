const _url = 'http://118.89.60.254:3000/';
const _url2 = 'https://api.imjad.cn/cloudmusic/';
const _url3 = 'http://musicapi.duapp.com/api.php';
export default {
  getLogin (cellphone, password) {
    return _url + 'login/cellphone?phone=' + cellphone +
      '&password=' + password;
  },
  getPlayList (uid) {
    return _url + 'user/playlist?uid=' + uid;
  },
  getPlayListAll () {
    return _url + 'top/playlist?limit=72';
  },
  // getPlayListDetail (id) {
  //   return _url + 'playlist/detail?id=' + id;
  // },
  getPlayListDetail (id) {
    return _url2 + '?type=playlist&id=' + id;
  },
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _url3 + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit;
  }
};
