var express = require('express')
var app = express()
 

var allowCrossDomain = function(req,resp,next){
    resp.setHeader("Access-Control-Allow-Origin",'*');
    resp.setHeader("Access-Control-Allow-Methods",'GET,POST');
    next();
}

app.use(allowCrossDomain);

app.get('/', function (req, res) {
    res.setHeader('Content-Type','text/json');
  res.send('{srikamth:"cyient"}')
})
 
app.listen(3000)