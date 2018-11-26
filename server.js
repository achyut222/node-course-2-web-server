const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views'+'/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (test)=>{
  return test.toUpperCase();
});

app.get('/', (req, res)=>{
  //res.send('<h1>Hello Express</h1>');

  res.render('home.hbs',{
    pageTitle: 'Home Page',
  //  currentYear: new Date().getFullYear(),
    message: 'welcome to home page'
  });
});

app.get('/about', (req, res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    //currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res)=>{
  res.send({
    errorMsg:'bad request'
  });
});
app.listen(3000);
