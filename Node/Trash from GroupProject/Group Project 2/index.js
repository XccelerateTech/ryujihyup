const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const pg = require('pg')
const router = express.Router();
const axios = require('axios');

require('dotenv').config();
const flash = require('connect-flash');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const fs = require('fs');
const https = require('https');

const app = express();

//Eric's Router
const communityRouter = require('./routers/communityRouter.js')

// const knexConfig = require('./knexfile').development;
// const knex = require('knex')(knexConfig);

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(expressSession({
    secret: 'thisRealSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false}
}));

var config = {
    user: 'Ann',
    host: 'localhost',
    database: 'test',
    password: '',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const client = new pg.Client(config);
client.connect()
  
// client.query('SELECT * FROM users', function(err, results) {
//     if(err) {
//         console.log(err);
//     }
//     console.log(results);
// })

app.use(passport.initialize());
app.use(passport.session());

passport.use('local-login', new LocalStrategy(
    async (username, password, done) => {
        try{
            let query = 'select * from users where username = $1'

            let users = await client.query(query, [username], function (err, results){
                if(err) {
                    console.log(err);
                }
        
                if(results.length == 0){
                return done(null, false, {message: 'No user exists'})
            }

            // console.log(results)
            let user = results.rows[0];
            // console.log(user)
            if(user.password === password){
                return done(null, user)
            } else {
                return done(null, false, {message: 'Incorrect credentials'})
            }
            })
            ;
           
        } catch(err){
            return done(err);
        }
    }
));

passport.use('local-signup', new LocalStrategy(
    async (username, password, done) => {
        try{
            let query = 'select * from users where username = $1';
            let users = await client.query(query, [username], async function(err, results){
                if (results.rows.length > 0) {
            return done(null, false, { message: 'Email already taken' });
            }
            // const newUser = {
            //     username: username,
            //     password: password,
            //     email: email
            // };
            let query1 = 'insert into users (username, password) values ($1, $2) RETURNING id';
            let newUser = await client.query(query1, [username, password], function(err, results){
                if (err) {
                    console.log(err)
                }                
                // console.log(results.rows[0])

                // console.log(results)  
                return done(null, results.rows[0]);
                // return newUser
            })
            // let userId = await client.query1('users').insert(newUser).returning('id');
            // newUser.id = userId[0];
          
            })
            
        }catch(err){
            return done(err);
        }

    })
);

passport.serializeUser((user, done) => {
    // console.log(user.id)
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let query = 'select * from users where id = $1'
    let users = await client.query(query, [id], function(err, results){
        
        if(err) {
            console.log(err);
        }
        if (results.rows.length == 0) {
        return done(new Error(`Wrong user id ${id}`));
        }
        let user = results.rows[0];
        // console.log(user)
        return done(null, user);
    })
    ;
    
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

app.get('/user', isLoggedIn, (req, res)=>{
   let  user = req.user.username
    res.json(user)
    // res.render('profile', {layout:'main'})
})

app.get('/user/:id', isLoggedIn, (req, res)=>{
   let userID = req.params.id
    let  user = req.user.username
     res.json(userID)
    // res.render('profile', {layout:'main'})
 })

app.get('/',isLoggedIn, (req, res)=>{
    res.render('index', {
        user: req.user.id
        //  addUserToNavbar(user)
    });
    console.log(req.user.id);
});
 
app.get('/login', (req, res)=>{
    res.render('login', {layout: false})
});

app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/error'
}));

app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/error'
}));

app.get('/loginSuccess', (req, res) => {
    res.render('loginSuccess', {layout:'main'});
});

app.get('/secret', isLoggedIn, (req, res) => {
    res.send('Here you go, a secret');
});

app.get('/error', (req, res)=>{
    res.send('You have failed...')
});

app.get('/logout', function(req, res){
 
    console.log(req.isAuthenticated());
    req.logout();
    console.log(req.isAuthenticated());
    res.redirect('/');
    });

// app.get('/signup', (req, res)=>{
//     res.render('signup', {layout: 'main'})
// });


// app.get('/community', isLoggedIn, (req, res) => {
//     res.render('comunnity', {layout:'main'});
// });

// app.get('/community/:id', isLoggedIn, (req, res)=>{
//     //    let userID = req.params.id
//         // let  user = req.user.username
//         //  res.json(userID)
//         res.render('community', {layout:'main'})
//      })

app.use('/community', isLoggedIn, communityRouter)



app.listen(3030, function(){
    console.log(`Now you're connected to port 3030!`)
});