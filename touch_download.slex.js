// ==UserScript==
// @name            touch_download
// @namespace       http://fenrir-inc.com
// @author          Keenan_L-P
// @description     Touch any image with 2 fingers to open in a new tab
// @description     Makes images easier to download
// @include         http://*
// @version         0.1
// ==/UserScript==
 

window.document.getElementsByTagName('h3')[0].addEventListener("touchstart", function(evt){
  for(var key in evt){
    alert(key);
    alert(JSON.stringify(evt[key]));
  }
}, false);
