var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000); 

//para poder utilizar jade
app.set('views', __dirname + '/views');
app.set('view engine', 'jade'); 	

//hay q agregarlo para las poticiones post, ya que express no parsea el cuerpo del request por defecto
app.use(express.bodyParser());  


app.get('/', function(request, response) {
 
    response
    .render('index', {
 
        title: '¡Hola, Express!',
        username: 'oscar'
 
    });
 
});
 
 
// app.get('/users/:userName', function(request, response) {
 
//  var name = request.params.userName;
 
//  response.send('¡Hola, ' + name + '!');
 
// });
 
 
app.post('/users', function(request, response) {
 
    var username = request.body.username;
 
    response.send('¡Hola, ' + username + '!');
 
});
 
 
app.get(/\/personal\/(\d*)\/?(edit)?/, function (request, response) {
 
    var message = 'el perfil del empleado #' + request.params[0];
 
    if (request.params[1] === 'edit') {
 
        message = 'Editando ' + message;
 
    } else {
 
        message = 'Viendo ' + message;
 
    }
 
    response.send(message);
 
});
 
 
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});