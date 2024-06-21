const os = require('os')

         
//info about corrent user          
     
const user = os.userInfo() 
//returns system uptime in seconds 
console.log(user)  
               

console.log(`The System Uptime is ${os.uptime} seconds`)
             
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}  
console.log(currentOS)