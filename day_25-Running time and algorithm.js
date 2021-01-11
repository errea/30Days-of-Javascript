 //Given a number, n, determine and print whether prime or not prime.
    //Split input (ex: 12 5 7) with \n and place into result
    let result = input.split("\n").slice(1).map(isPrime);
 
    function isPrime(input, i) {
        let messageArray = ["Not prime", "Prime"];
 
        if(input == 1) { //1 is not prime
            return messageArray[0];
        }
        if (input == 2) {
            return messageArray[1];
        }
        if(input % 2 == 0){
            return messageArray[0];
        } //Get square root of input and run For loop while that value is <= i.
        //i incrementing up by 2 each run.
        for(i = 3; i <= Math.sqrt(input); i += 2) {
            if(input % i == 0) { //if input mod i = 0 (divisible by i) then not prime.
                return messageArray[0];
            }
        } //If you get past For loop without returning not prime, then it's prime.
        return messageArray[1];
    }
    console.log(result.join("\n"));