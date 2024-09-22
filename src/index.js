const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');

//Initializations
const app = express();
require('./databse')


//settings
app.set('views', path.join(__dirname,'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT||3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Routes
app.use('/', require('./routes/index'));

//starting server
app.listen(app.get('port'),()=>{
    console.log('SERVIDOR ACTIVO EN PUERTO', app.get('port'));
});