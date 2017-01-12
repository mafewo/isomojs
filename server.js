require('node-jsx').install({harmony: true});
var express =  require('express');
var reactEngine = require('react-engine');

var app = express();

app.set('views', __dirname+'/src/views');

app.use(express.static(__dirname+'public'));

var engine = reactEngine.server.create();

app.engine('.jsx', engine);

app.set('view engine', 'jsx');

app.set('view', reactEngine.expressView);

app.get('/', function(req, res){
    res.render('home', {
        'title': 'Mi primer app isomorfica'
    })
})
app.get('/home', function(req, res){
    res.render('home', {
        'title': 'Mi primer app isomorfica'
    })
})
app.listen(3000,function(){
    console.log("servidor corriendo en puerto 3000");
});
