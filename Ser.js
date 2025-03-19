const http=require("http")

const server=http.createServer( (req,res)=>{
    res.writeHead(200,('condent-type:plain/text'))
    res.end("endd")

})
server.listen(3000,()=>{
    console.log("workinyyyy");
    
})
