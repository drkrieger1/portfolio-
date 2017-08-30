'use strict';

page('/about', aboutController.init);
// page('/projects', projectsController.init);
page('/github', app.repoController.init);

page();
