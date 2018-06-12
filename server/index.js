const express = require('express');
const bodyParser = require('body-parser');

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, err => {
  if (err) {
    console.log('error connecting to port', port);
  } else {
    console.log('successfully connected to port');
  }
});