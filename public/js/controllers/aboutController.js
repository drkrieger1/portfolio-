'use strict';

const aboutController = {};

Portfolio.fetchAll();

aboutController.init = function() {
  $('.projects').hide();
  $('.about').show();
}
