const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerHelper('curYear',() => {
  return new Date().getFullYear();
});
hbs.registerHelper('curDate',() => {
  return new Date().toString();
});
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs');
});

var date = new Date();
app.listen(port, () => {
  console.log(port + `:port - runned at ${date}`);
});
