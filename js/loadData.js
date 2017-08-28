'use strict';

function Portfolio (rawDataObject){
  this.bio = rawDataObject.bio;
  this.skills = rawDataObject.skill;
}

Portfolio.all = [];

Portfolio.toHtml = function (){
  var template = Handlebars.compile($('#about-template').text());
  return template(this.bio);
};
Portfolio.toHtml2 = function(){
  var template2 = Handlebars.compile($('#skill-template').text());
  return template2(this.skills);
};

Portfolio.loadAll = function(rawData){
  rawData.forEach(function(ele){
    Portfolio.all.push(new Portfolio(ele));
  });
};

Portfolio.fetchAll = function(){
  if(localStorage.rawData){
    Portfolio.loadAll(JSON.parse(localStorage.rawData));
    features.initIndex();
  } else{
    $.getJSON('/data/profile-data.json')
    .then(function(rawData){
      Portfolio.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      features.initIndex();
    },function(err){
      console.log(err);
    });
  }
};
