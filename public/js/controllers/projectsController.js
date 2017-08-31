'use strict';
var app = app || {};
const projectsController = {};

projectsController.init = function() {
  $('.about, #gitRepo').hide();
  $('.projects').toggle();
}
