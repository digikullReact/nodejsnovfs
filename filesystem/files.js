const fs=require("fs");

fs.writeFile("demo.txt","HEllo world",()=>{
    console.log("File Created SuccessFully")
})

fs.readFile("demo.txt","utf-8",(err,data)=>{
    console.log(data)
})