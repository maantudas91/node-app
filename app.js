const bodyParser  = require('body-parser');
//const hbs = require('hbs');
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
//const expressValidator = require('express-validator');
//const flash = require('express-flash');

var port = process.env.PORT || 8080;

var myRoutes = require('./router.js');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//app.use(expressValidator());
app.use(session({secret: 'ssshhhhh'}));
//app.use(flash());
app.use(express.static(__dirname + '/public'));
app.use('/',myRoutes);



//hbs.registerPartials(__dirname + '/views/partials');
//hbs.registerHelper('currentYear',function() { return new Date().getFullYear(); });


app.listen(port, () => {
  console.log(`Server connected!!`);
});

