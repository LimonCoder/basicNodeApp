let http = require('http');
require('dotenv').config();
let handleRequest  =require('./Modules/RequestManager');
const server =  http.createServer(handleRequest);


server.listen(8500,()=>{
    console.log('Server is running on port 8000');
});
