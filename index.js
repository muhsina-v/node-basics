// const http = require("http");

// const server =http.createServer(function(req,res) {
//     res.write("hollo from http module ")
//     res.end();
// })
// .listen("8080")

const hello={
    name:"sinu", 
    place:"mongam",
    greet: function(){
        console.log(`i am ${this.name}`);
        
    }
}
module.exports=hello

const http=require("http")

const server=http.createServer(()=>{
res.writehead("kkk")
res.end()

})
.listen(3000)