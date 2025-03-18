 const fs=require('fs')

// fs.readFile('text.txt','utf8',function(error,data){
//     if (error){
//         console.log('erre',error);
//         return
//     }
//     console.log(data);
    
// }

// )
//////////////////////////////////////////////////////

// fs.writeFile('text.txt',"hello vvvv",function(error){
// if(error){
//     console.log(error);
//     return
    
// }
// console.log('hgggggggggg');

// }

// )
////////////////////////////////////////////////////////


// fs.appendFile('text.txt',"\nhellozzzzzz",function(error){
//     if(error){
//             console.log(error);
//             return
            
//          }
//          console.log('h');
// }


// )
///////////////////////////////////////////////////////
 


// fs.unlink('text.txt',function(err){
//     if (err) {
//         console.error("❌ Error deleting file:", err);
//         return;
//     }
//     console.log("🗑️ File deleted successfully!");
// });
////////////////////////////////////////////////////////////////



if(fs.existsSync('file.txt')){
    console.log("mmmmm");
    
}else{
    console.log("naa");
    
}