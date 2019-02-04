const express = require('express');
const app = express();
const  path= require('path');
var expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

const PUBLIC = path.join(__dirname + '/public')

// Set the default templating engine to ejs
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(  express.static(PUBLIC));



app.get('/', (req, res) => {
	res.render('index',{ title: 'Demo coffe!' });
});

app.use(function(err, req, res, next) {
  res.status(500).send('Something broke!');
});

app.listen( port, () => console.log(`welcome to ${port}`));
