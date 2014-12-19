// ==UserScript==
// @name            touch_download
// @namespace       http://fenrir-inc.com
// @author          Keenan_L-P
// @description     Touch any image with 2 fingers to open in a new tab
// @description     Makes images easier to download
// @include         http://*
// @version         0.1
// ==/UserScript==
 
var images = window.document.getElementsByTagName('img');

images.forEach(function(node){
  node.addEventListener("touchstart", function(evt){
    var touches = evt.touches;
    if( touches.length === 2 ){
      window.open(this.src);
    }
  }, false);
});
