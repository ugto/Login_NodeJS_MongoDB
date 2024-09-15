const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

const app = express();


//settings
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT||3000);

//Routes
app.use('/', require('./routes/index'));

//starting server
app.listen(app.get('port'),()=>{
    console.log('SERVIDOR ACTIVO EN PUERTO', app.get('port'));
});