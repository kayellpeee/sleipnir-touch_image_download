// ==UserScript==
// @name            touch_download
// @namespace       http://fenrir-inc.com
// @author          Keenan_L-P
// @description     Touch any image with 2 fingers to open in a new tab
// @description     Makes images easier to download
// @include         http://*
// @version         0.1
// ==/UserScript==
 
var title = window.document.getElementsByTagName('h3')[0];

title.addEventListener("touchstart", function(evt){
  var touches = evt.touches;
  if( touches.length === 2 ){
    window.open("http://images.nationalgeographic.com/wpf/media-live/photos/000/862/cache/ijen-crater-sulfur-lake_86230_990x742.jpg");
  }
  title.textContent = touches.length;
}, false);
