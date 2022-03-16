const fs=require("fs");

const { stdin: input, stdout: output, stdout } = require('process');
const rs=fs.createReadStream("demo.txt",{
    encoding:"utf-8"
})

const ws=fs.createWriteStream("writebig.txt",{
    encoding:"utf-8"
})

// Duplex stream --->input and outpput



//rs.pipe(stdout)
rs.pipe(ws)