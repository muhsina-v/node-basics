console.clear()
console.log("pp");

const si=setInterval(function(){
    console.log("hhhhhh")
    
},1000);

setTimeout(() => {
    clearInterval(si)
},5000);