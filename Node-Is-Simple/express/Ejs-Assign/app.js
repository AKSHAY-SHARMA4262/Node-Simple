const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views')

app.get('/', (req,res,next) =>{
    res.render('index', { pageTitle : 'Add User'})
})

app.get('/users', (req,res,next) =>{
    res.render('users', { pageTitle : 'User'} )
})

app.get('/add-users', (req,res,next) =>{
    res.redirect('/users', { pageTitle : 'User'})
})

app.listen(3000);