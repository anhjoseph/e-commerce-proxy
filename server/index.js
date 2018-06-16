const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public/')));

app.listen(port, err => {
  if (err) {
    console.log('error connecting to port', port);
  } else {
    console.log('successfully connected to port');
  }
});