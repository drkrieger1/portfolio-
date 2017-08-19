'use strict';

//------img container
var imgs = ['img/cat.jpg','img/dog.jpg','img/dog2.jpg'];

var features = {};
var index = 0;

features.navDropDown = function(){
  $('#menu').click(function(){
    $('ul.nav').slideToggle('slow');
  });
};

features.imgPopulator = function(){
  $('#hero-img').attr('src', imgs[index]);
};

features.imgSlider = function(){
  $('#button-right').click(function(e){
    e.preventDefault();
    index++;
    console.log('click made');
    $('#hero-img').hide();
    if(index === imgs.length){
      index = 0;
    }
    $('#hero-img').attr('src', imgs[index]);
    $('#hero-img').fadeIn('easing');
  });
  console.log('slider loaded..');
};



$(document).ready(function(){
  features.imgPopulator();
  features.imgSlider();
  features.navDropDown();
});
