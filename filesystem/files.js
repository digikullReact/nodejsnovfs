const fs=require("fs");

const os=require("os");
//console.log(os.cpus());

const array=[
   "Sanjiv",
   "Vaibhav",
   "Jagruti",
   "Sumit",
   "Saurabh",
   "Bhagyashree"
]

const json=[
    {
      "db_value": 1,
      "display_name": "Moisture",
      "field_name": "Moisture",
      "id": 1,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    },
    {
      "db_value": "1",
      "display_name": "Foreign Matter",
      "field_name": "foreign_matter",
      "id": 2,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    },
    {
      "db_value": 1,
      "display_name": "Live Insects",
      "field_name": "live_insect",
      "id": 3,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    },
    {
      "db_value": "0",
      "display_name": "Broken",
      "field_name": "broken",
      "id": 7,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    },
    {
      "db_value": "11",
      "display_name": "Shriveled",
      "field_name": "shriveled",
      "id": 8,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    },
    {
      "db_value": "0",
      "display_name": "Damage",
      "field_name": "damage",
      "id": 10,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    },
    {
      "db_value": "0",
      "display_name": "Weevilled",
      "field_name": "weevilled",
      "id": 11,
      "is_required": 1,
      "short_code": "",
      "unit": "float"
    }
  ]
  /*
fs.writeFile("demo.json",JSON.stringify(json),()=>{
    console.log("File Created SuccessFully")
})
*/

/*

fs.readFile("demo.json","utf-8",(err,data)=>{
    if (err){
        console.log(err);
        return 
    }

    const parsedData=JSON.parse(data)
    for (let i=0;i<parsedData.length;i++){
        console.log(parsedData[i])
    }
})
*/

for(let i=0;i<array.length;i++){
    fs.appendFile("append.txt",`${array[i]}${os.EOL}`,()=>{
        console.log("Written to file successfully")
    })
    
}

// Sync version
/// ----Promisify these methods 






