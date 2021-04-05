//const EventEmitter = require('events');
//const eventEmitter = new EventEmitter();

const readline = require('readline');
const rl = readline.createInterface(process.stdin,process.stdout);

const n1 = Math.floor((Math.random()*10)+1);
const n2 = Math.floor((Math.random()*10)+1);

const tutorial = require('./Tutorial');
const ans = tutorial.sum(n1,n2);
console.log(new tutorial.someObject());

//console.log(rl);

/*eventEmitter.on('sumcall',()=>{
    console.log('sumcall event occured');
})
eventEmitter.emit('sumcall');*/

rl.question(`how much is ${n1} + ${n2} \n`,(res)=>{
    if(res == ans){
        //console.log('correct!!!!!!!!');
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect ans try again \n');
        rl.prompt();
        rl.on('line',(res)=>{
            if(res==ans)rl.close();
        })
    }
})
rl.on('close',()=>{
    console.log('Correct !!!!!!!!!!!');
})