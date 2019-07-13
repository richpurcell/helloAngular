const express = require("express");
const bp = require('body-parser');
const flash = require('express-flash'); // required for displaying error messages
var session = require('express-session');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bp.json());

var path = require('path');
app.use(express.static(__dirname + '/public/dist/public'));

app.use(flash());

app.use(session({
    secret: 'keyBoardKitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
 }));





require('./routes')(app)



app.listen(8000, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("Listening on port 8000");
    }
});