

const fs = require("fs")

fs.readFile("./text.txt","UTF-8",function(error,data){
    if (error){
        console.log(error);
    }
    console.log(data)
       
})