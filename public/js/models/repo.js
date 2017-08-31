'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
    .then(
      data => {console.log('ajax to github');data.forEach(function(ele) {repos.all.push(ele)});callback()},
      err => console.error(err))
    };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
