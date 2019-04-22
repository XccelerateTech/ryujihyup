const express = require('express');

const app = express();

const hb = require('express-handlebars');



app.engine('handlebars', hb({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars'); 



app.get('/', (req, res)=>{

    res.render('index' )

});



app.get('/people', (req, res)=>{

    res.render('person');

});

app.get('/something', (req, res) => {
    res.render('views', {layout:"otherPage"})
});


app.get('/first', (req, res)=> {
    res.render('views', {layout:"myFirst"})
});

app.get('/city', (req, res)=>{

    res.render('city')

});



app.get('/hk', (req, res)=>{

    res.render('city', {city: "Hong Kong"})

});



app.get('/singapore', (req, res)=>{

    res.render('city', {city: "Singapore"})

});

app.listen(8080, ()=>{

    console.log(`App is listening to port 8080`);
});