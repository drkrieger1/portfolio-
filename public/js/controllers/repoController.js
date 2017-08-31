'use strict';
var app = app || {};

(function(module) {
  const repoController = {};

  repoController.init = () => {
    $('#gitRepo').show().siblings().hide();

    app.repos.requestRepos(app.repoView.index);
  };

  module.repoController = repoController;
})(app);
