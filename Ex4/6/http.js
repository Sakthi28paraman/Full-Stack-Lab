var http = require('http'); 
http.request({ host: 'erp.mepcoeng.ac.in', 
method: 'GET',
path: "/" }, 
function(response) { 
response.setEncoding("utf8");
 response.on("readable", function(){ 
    console.log(response.read())
}); 
}).end();