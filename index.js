// Code your solutions in this file
let value=10
function countDown(value){
   while(value>-1){
   console.log(value--)
   }
   return value
}

function writeCards(names){
    for(let person of names){
     console.log`${person}`
     }
     const Messages = names.map(person => `Thank you, ${person}, for the wonderful surprise gift!`)
     return Messages
    }
