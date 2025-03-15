const EventEmitter=require('events')
const emitter=new EventEmitter()

emitter.on('greet',function(name){
console.log(`hloooooooo  ${name}`);

})

emitter.emit('greet',"muhsi")