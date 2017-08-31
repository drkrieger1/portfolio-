'use strict';

const aboutController = {};

Portfolio.fetchAll(features.initIndex);
aboutController.init = function() {
  $('.projects, #gitRepo').hide();
  $('.about').toggle();
}
