var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var buf = fs.readFileSync('./index.html','utf8');

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
