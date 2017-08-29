'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.listen(PORT, function(){
  console.log(`Portfolio is listening on port ${PORT}`);
});
