'use strict';

// page('/', function(){console.log(`this is home`);});
page('/about', aboutController.init);
page('/projects', projectsController.init);
page('/github', app.repoController.init);


page();
