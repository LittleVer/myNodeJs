/**
 * Created by little_ver on 2017/4/17.
 */
var express = require('express');
var app = express();

//app.get('/',(req,rsp)=>rsp.send('Hello world'));

app.use('/static',express.static('public'));

app.use('/dist',express.static('dist'));

app.use('/',express.static('views'));

//app.param('id','50');

app.param('id',function(req,res,next,id){
    console.log('CALLED ONLY ONCE');
    next();
});

app.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});

app.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at3 http://%s:%s', host, port);
    console.log(server.address());
});