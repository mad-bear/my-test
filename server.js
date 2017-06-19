const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('title', () => {
  return 'title';
});

app.get('/about',(req, res) => {
  res.render('about.hbs');
});
app.get('/',(req, res) => {
  res.render('home.hbs');
});
app.listen(3000);
