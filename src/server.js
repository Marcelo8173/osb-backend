// import 'reflect-metadata';

import express, { Request, Response, json } from 'express';
// import './database/index';




const app = express();

app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(8080, ()=>{
    console.log('obs up in port 8080');
})