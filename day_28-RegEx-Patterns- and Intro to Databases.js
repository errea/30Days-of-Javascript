'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);

     //new - Using RegExp which allows you to 'search' within data. We'll be searching for @gmail.com
    var patt = new RegExp("@gmail.com");
    var names = []; //Creating the array of first names
    //below code given by hacker rank

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
        
        //Using our regExp here with emailID variable. Names that match         get kept for the sorting below.
        if(patt.test(emailID)){
            names.push(firstName);
        }
    }
    
    //Sorting names in alphabetical order, then printing them to console.
    names.sort().forEach(function(name){
        console.log(name);
    }); //end new
}
