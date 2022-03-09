const giveMeAJoke = require('give-me-a-joke');

// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});

// You have to create a custom module and export 
// it which has an array of objects --
// And a function to filter that array 