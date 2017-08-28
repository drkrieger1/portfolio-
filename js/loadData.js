'use strict';

function Portfolio (rawDataObject){
  this.bio = rawDataObject.about;
  this.skills = rawDataObject.skill;
  this.toHtml = function (){
    var template = Handlebars.compile($('#about-template').text());
    return template(this);
  };
  this.toHtml2 = function(){
    var template2 = Handlebars.compile($('#skill-template').text());
    return template2(this.skills);
  };
}

Portfolio.all = [];


Portfolio.loadAll = function(rawData){
  // rawData.forEach(function(ele){
  //   Portfolio.all.push(new Portfolio(ele));
  Portfolio.all.push(new Portfolio(rawData));
};
// };

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
      features.initIndex();
    },function(err){
      console.log(err);
    });
  }
};
