// var express = require('express')
// const app = express();
// var bodyparser = require('body-parser');
// var helmet = require('helmet')


// app.use(bodyparser.urlencoded({extended:false}));

// app.use(helmet());

// app.listen(3000,()=>{
//     console.log("Application listening to port 3000");
// });

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+'/mail.html');
// })

// app.post('/req',async(req,res)=>{
//     console.log(req.body);
   
// });

var nodemailer = require('nodemailer');
var mail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sakthieswar5014@gmail.com',
        pass:'comeonMF'
    }
})

var data = {
    from : 'sakthieswar5014@gmail.com',
    to: 'sakthiparameswaran0128@gmail.com',
    subject: 'Sending mail',
    message: "Valar Morghulis"
}


mail.sendMail(data,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent'+ info.res)
    }
    return res.send('user'+req.body.to+'mail sent successfully');
})
