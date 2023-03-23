const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app = express();
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://0.0.0.0:27017/FSD");
const response = mongoose.model('survey',new mongoose.Schema({
                    name: String,
                    mail : String,
                    phone : Number,
                    know : String,
                    ma : Array,
                    pratice : Number,
                    effect : String
                }));

app.get('/', (req,res
    )=>{
    res.sendFile(__dirname+'/survey.html');
})
app.listen(3000,()=>{
    console.log("Server is listening to port 3000");
})
app.post('/sendsurvey',async(req,res)=>{
    // console.log("hello")
    let data ={...req.body}
    // console.log("hello")
    await new response(data).save();
    console.log(data);  
    console.log(await response.find());
    res.send()
})


