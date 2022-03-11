const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv




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



//takeOrder();




//You have to build a command line ap

function takeUSerInfo(){

    //console.log()


    rl.question(`HEllo ${argv.name}  Please Help me with your other details to create an account`, (answer) => {
        
    
    
       
        rl.close();
       });

}
takeUSerInfo();
