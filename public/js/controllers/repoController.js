'use strict';
var app = app || {};

(function(module) {
  const repoController = {};

  repoController.init = () => {
    $('.about, .projects, #gitRepo').hide();
    $('#gitRepo').toggle().siblings('slow');

    app.repos.requestRepos(app.repoView.index);
  };

  module.repoController = repoController;
})(app);
