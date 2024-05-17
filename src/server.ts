// import 'reflect-metadata';

import express, { json } from 'express';
// import './database/index';




const app = express();

app.use(json());



app.listen(8080, ()=>{
    console.log('obs up in port 8080');
})