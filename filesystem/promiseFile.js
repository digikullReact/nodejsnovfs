const fs = require("fs");
/*
fs.readFile("append.txt","utf-8").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/

const promise=new Promise((res,rej)=>{
    /// if there is an error ----> rej()
    // res();
})

function promisifyReadFile(fileName, charcter) {
  return new Promise((res, rej) => {
    fs.readFile(fileName, charcter, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
}


promisifyReadFile("bigfile.txt","utf-8").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})


/// npm package to read large files --->