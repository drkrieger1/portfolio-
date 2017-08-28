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
//---------Nav handler------------
features.selections = function(){
  $('#project').on('click', function(){
    $('.about').hide();
    $('.projects').show(function(){
    });
  });
  $('#about').on('click', function(){
    $('.projects').hide();
    $('.about').show(function(){
    });
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
    $('.skills').append(portfolio.toHtml2());
  });
};

$(document).ready(function(){
  features.imgPopulator();
  features.imgSlider();
  features.navDropDown();
  features.selections();
});
