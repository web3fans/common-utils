/*
 * @Author: your name
 * @Date: 2020-05-25 20:36:23
 * @LastEditTime: 2020-05-25 20:36:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/addFavorite.js
 */
//加入收藏夹
function addFavorite(sURL, sTitle) {
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, "");
    } catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
  }
}