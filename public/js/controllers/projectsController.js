'use strict';
var app = app || {};
const projectsController = {};

// Portfolio.fetchAll(features.initIndex);

projectsController.init = function() {
  $('.about, #gitRepo').hide();
  $('.projects').toggle();
}
