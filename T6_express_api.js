const express = require('express');
const app = express();

app.get('/ping',(req,res)=>{
    res.send({ response : "pong"});
});

app.listen(4000,() => console.log('Server started and listening on port 3000'));