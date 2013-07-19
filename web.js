var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var buf = fs.readFileSync('/home/ubuntu/bitstarter/index.html','utf8');

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
