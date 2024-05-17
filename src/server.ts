// import 'reflect-metadata';

import express, { json, request } from 'express';
// import './database/index';




const app = express();

app.use(json());

app.get('/')

app.listen(8080, ()=>{
    console.log('obs up in port 8080');
})