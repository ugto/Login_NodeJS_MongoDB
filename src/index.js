const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT||3000);

//starting server
app.listen(app.get('port'),()=>{
    console.log('SERVIDOR ACTIVO EN PUERTO', app.get('port'));
});