const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('../routes');
require('../src/configDB/db');

app.use(express.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");     
   res.header("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,Authorization");
    app.use(cors())
    next();    
  });
app.use(routes);
app.listen(8086,function(){
    console.log('servidor rodando !');
 })