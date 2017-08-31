'use strict';

const aboutController = {};

Portfolio.fetchAll(features.initIndex);
aboutController.init = function() {
  console.log('about');
  $('.projects, #gitRepo').hide();
  $('.about').toggle();
}
