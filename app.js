const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const User = require('./models/user-model');
const router = require('./routes/user-route');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/',router);

const uri = "mongodb://localhost:27017/CRUD-Users?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {

app.listen(3000, () => console.log("Server Running!")  );

});