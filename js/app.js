'use strict';

$(document).ready(function(){
  $('#menu').click(function(){
    $('ul.nav').slideToggle('slow');
    console.log('click');
  });
});
