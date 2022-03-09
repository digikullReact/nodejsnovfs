const EventEmitter = require('events');
const eventObject=new EventEmitter();

//emit 
let i=0;
setInterval(()=>{
    if(i%2==0) {
        //200
        eventObject.emit("even",i);
        // make an api call to amazon website  //webscrapping
        // current price --->
      
        
    }

i++;
},1000)




eventObject.on("even",(data)=>{
    console.log("An even Number Has been encountered"+data);
})