const express = require("express");
const http = require("http");
const socketIO=require("socket.io");
 
const app = express();
 
const server = http.createServer(app);
 
const io = socketIO(server);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
 
io.on("connection",(socket)=>{
    socket.emit("news",{
        hello:"20203002"
    });
    socket.on('other event',(data)=>{
        console.log(data)
    });
});
 
const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`server is running at http://127.0.0.1:${5000}`))