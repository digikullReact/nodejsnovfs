const arry=[
    {
        name:"Jagruti",
        age:"22",
        profession:"student"
    },
    {
        name:"Jagruti",
        age:"26",
        profession:"sde"
    }
]


const filter=(name)=>{

    return arry.filter(ele=>ele.name==name);

}

module.exports=filter;