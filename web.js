var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());
var buf = buffer(100);
buf = fs.readFileSync('/home/ubuntu/bitstarter/index.html');
var str = buf.toString('utf8',0,buf.length);
app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
