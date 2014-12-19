// ==UserScript==
// @name            touch_image_download
// @namespace       http://fenrir-inc.com
// @author          Keenan_Lidral-Porter
// @description     Touch any image with 2 fingers to open in a new tab
// @description     Makes images easier to download
// @include         http://*
// @version         1.0
// ==/UserScript==
 
var images = window.document.getElementsByTagName('img');

Array.prototype.forEach.call(images, function(node){
  var tapped = false;
  node.addEventListener("touchstart", function(evt){
    var touches = evt.touches;
    if( tapped ){
      window.open(this.src);
    }else{
      tapped = true;
      setTimeout(function(){
        tapped = false;
      }, 500);
    }
  }, false);
});
