'use strict';

//------img container
var imgs = ['img/shark.jpg','img/us1.jpg','img/us2.jpg','img/paintball.jpg','img/fires.jpg'];

var features = {};
var index = 0;

features.navDropDown = function(){
  $('#menu').click(function(){
    $('ul.nav').slideToggle('slow');
  });
};

//--------Img Population-------
features.imgPopulator = function(){
  $('#hero-img').attr('src', imgs[index]);
};
//----------Img Carousel--------
features.imgSlider = function(){
  $('#button-right').click(function(e){
    e.preventDefault();
    index++;

    $('#hero-img').hide();
    if(index === imgs.length){
      index = 0;
    }
    $('#hero-img').attr('src', imgs[index]);
    $('#hero-img').fadeIn('easing');
  });

  $('#button-left').click(function(e){
    e.preventDefault();
    if(index === 0){
      index = imgs.length;
    };
    $('#hero-img').hide();
    index--;
    $('#hero-img').attr('src', imgs[index]);
    $('#hero-img').fadeIn('easing');
  });
};
features.initIndex = function(){
  Portfolio.all.forEach(function(portfolio){
    $('.about').append(portfolio.toHtml());
  });
};
features.stickyNav = function(){
  $('.header').attr('class','stickyNav');
  console.log('sticky nav code running');
};

$(document).ready(function(){
  // features.stickyNav();
  features.imgPopulator();
  features.imgSlider();
  features.navDropDown();
});
