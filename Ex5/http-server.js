const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/reg',(req,res)=>{
    var length = req.body.tb.split('').length;
    console.log(length);
    return res.send("Length: "+length);
})

app.listen(5000,()=>{
    console.log("Server listening to the port 3000");
})