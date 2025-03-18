const http=require("http")

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("HELLO RES END ")
});

server.listen(3000,()=>{
    console.log('server is working');
    
})


// const http=require('http')


// const server=http.createServer((req,res)=>{
 
//     if(req.url=="/"){
//         res.writeHead(200,('content-type:text/plain'))
//     res.end('home')
//     }else if(req.url=="/about"){
//         res.end('about');
        
//     }else{
//         res.writeHead(404,('content-type:text/plain'))
//         res.end("404");
        
//     }
// })

// server.listen(3000,()=>{
//     console.log('its working');
    
// })