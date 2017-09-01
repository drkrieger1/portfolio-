'use strict';

function Portfolio (rawDataObject){
  this.bio = rawDataObject.about;
  this.toHtml = function (){
    var template = Handlebars.compile($('#about-template').text());
    return template(this);
  };
}

Portfolio.all = [];


Portfolio.loadAll = function(rawData){

  Portfolio.all.push(new Portfolio(rawData));
};


Portfolio.fetchAll = function(){
  if(localStorage.rawData){
    Portfolio.loadAll(JSON.parse(localStorage.rawData));
    features.initIndex();
  } else{
    $.getJSON('/data/profile-data.json')
    .then(function(rawData){
      console.log('json data ' + rawData);
      Portfolio.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
    },function(err){
      console.log(err);
    });
  }
};
