var express = require('express');
var app = express();
app.use(express.logger());
var buf = buffer(100);
buf = fs.readFileSync('./index.html');
var str = buf.toString('utf8',0,buffer.length);
app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
