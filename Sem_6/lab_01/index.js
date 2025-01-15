const fs = require('fs');
/*
//write flag,w 
var wf = fs.open('mydata.txt','w',(err)=>{
    if(err) console.log(err);
    return;
});
console.log("File created");

//read flag,r 
var wf = fs.open('mydata.txt','r',(err)=>{
    if(err) console.log(err);
    return;
});

//append flag,a
var wf = fs.open('mydata.txt','a',(err)=>{
    if(err) console.log(err);
    return;
});
//append flag,a
var wf = fs.open('myd.txt','a',(err)=>{
    if(err) console.log(err);
    return;
});

//X: create a new file if it does not exist
*/
//writeFile function
var wf = fs.writeFile('data.txt','Akanksha',(err)=>{
    if(err) console.log(err);
    return;
});

//readFile function
var wf = fs.readFile('data.txt','utf8',(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
    return;
});
