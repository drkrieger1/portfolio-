'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $gitRepo = $('#gitRepo');
    $gitRepo.find('ul').empty();
    $gitRepo.show().siblings().hide();
  };

  repoView.index = function() {
    ui();
    let render = Handlebars.compile($('#repo-template').text());
    $('#gitRepo ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
