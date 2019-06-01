const express = require('express');
const app = express();
const knex= require('knex');
const bodyParser=require('body-parser');

const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'phantom',
    database : 'finalproject'
  }
});


app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/public/helpline.html');
});

app.get('/helpline',(req,res)=>{
  db.select('*').from('helpline').then(data=>{

    res.json(data);
  });
});

app.post('/ask',(req,res)=>{
      const {name,message}= req.body;
      db('helpline').insert({
        userName:name,
        ques:message,
        date: new Date()
      })
      .then(res.send('job done'));

});

app.listen(process.env.PORT || 3000);
