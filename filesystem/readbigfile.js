//---Buffers --- streams --->
//const fs=require("fs").promises;
const {  stdout: output } = require('process');

const fs=require("fs")

fs.readFile("app.js",(err,data)=>{

    // Some logic is based

})

const readStream=fs.createReadStream("bigfile.txt");

readStream.pipe(output)  // response object or standard output

//  ----