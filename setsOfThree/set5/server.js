const express = require('express');
const app = express();
var port = 5000;

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile('index.html');
});

app.listen(port);
