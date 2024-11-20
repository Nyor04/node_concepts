const http = require('node:http');


const PORT = 8888
const HTTPSERVER = http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/plain"});
    response.end("basic webserver is onfire baby B)")
}).listen(PORT,()=>{
    console.info(`http server running at http://localhost:${PORT}`);
});