const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


const coffees=[

    "Mocha",
    "Latte",
    "Black Coffee",
    "Cold Latte"
]


function takecoffeeInput(cb){
    console.table(coffees);

    rl.question('Please Input the  Menu  Number ', (answer) => {
        cb(coffees[answer])

        rl.close();
;

        ///    
      
       
        // 
       });

}

// Coffee order app 

function takeOrder(){

    rl.question('Please Select the Order From List ,Press 1 For Menu ', (answer) => {
       if(answer==1){
     
        takecoffeeInput(function (menuitem){
            console.log("Your order For "+ menuitem + " Is Confirmed") ;


        })

       }
   
      
       // rl.close();
      });


}



takeOrder();


