/*
 * @Author: your name
 * @Date: 2020-05-25 20:38:44
 * @LastEditTime: 2020-05-25 20:42:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/common-utils/src/utils/dynamicLoadingScript.js
 */
//  动态加载脚本文件
function appendscript(src, text, reload, charset) {
  var id = hash(src + text);
  if (!reload && in_array(id, evalscripts)) return;
  if (reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }

  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  scriptNode.charset = charset
    ? charset
    : BROWSER.firefox
    ? document.characterSet
    : document.charset;
  try {
    if (src) {
      scriptNode.src = src;
      scriptNode.onloadDone = false;
      scriptNode.onload = function() {
        scriptNode.onloadDone = true;
        JSLOADED[src] = 1;
      };
      scriptNode.onreadystatechange = function() {
        if (
          (scriptNode.readyState == "loaded" ||
            scriptNode.readyState == "complete") &&
          !scriptNode.onloadDone
        ) {
          scriptNode.onloadDone = true;
          JSLOADED[src] = 1;
        }
      };
    } else if (text) {
      scriptNode.text = text;
    }
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
  } catch (e) {}
}