'use strict';

//---img slider---
var imgs = ['img/cat.jpg','img/dog.jpg','img/dog.jpg'];

var features = {};

features.navDropDown = function(){
  $('#menu').click(function(){
    $('ul.nav').slideToggle('slow');
  });
};


$(document).ready(function(){
  features.navDropDown();
});
