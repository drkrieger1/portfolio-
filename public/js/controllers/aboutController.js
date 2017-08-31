'use strict';

const aboutController = {};

Portfolio.fetchAll(features.initIndex);
console.log('is aboutController working?')
aboutController.init = function() {
  console.log('about');
  $('.projects').hide();
  $('.about').show();
}
