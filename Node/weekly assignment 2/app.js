const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const handlebars = require('express-handlebars');

const express = require('express');
const app = express();

const config = require('./stores/config.json')['development'];
const AuthChallenger = require('./AuthChallenger');
const NoteService = require('./Service/noteService');
const NoteRouter = require('./Router/noteRouter');

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(basicAuth({
    authorizer: AuthChallenger(JSON.parse(fs.readFileSync(path.join(__dirname, config.users)))),
    challenge: true,
    realm: 'Note Taking Application'
}));

const noteService = new NoteService(path.join(__dirname, config.notes));

app.use('/', (req, res, next) => {
    console.log('Getting');
    next();
});

app.get('/', (req, res) => {
    console.log('index')
        console.log(app.get('view engine'))
        res.status(200).render('index', {
            user: req.auth.user,
        });
});

app.use('/api/notes', (new NoteRouter(noteService)).router());

app.listen(config.port, () => console.log(`Note Taking application listeing to port ${config.port}`));

module.exports = app;