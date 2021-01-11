function processData(input){
//If the book is returned on or before the expected return date, no fine will be charged fine=0
    //If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15hackos x (number of days late)
    //If the book is returned after the expected return month but still within the same calendar year as the expected return date, the 500 hackos x (the number of months late)
    //If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 hackos
    //Enter your code here
    const data = input.split("\n"); //Split the input given by /n. This is the acutal date then expected date.
    const [actual, expected] = data.map(line => {
    const [day, month, year] = line.split(" ").map(Number); //Once the two dates are split, split each line by space character to get day, month, year values. 
 
    return {day, month, year};//Return the values so they can be used in calculateFine
  });
 
  console.log(calculateFine(actual, expected)); //run calculateFine for actual/expected days, months, years.
 
}
 
const calculateFine = (actual, expected) => {
  //If actual year is greater, you owe 10,000 hackos.
  if (actual.year > expected.year) {
    return 10000;
  }
  //If actual and expected year are equal, and actual month is greater than expected, you owe 500 per month over.
  if (actual.year === expected.year && actual.month > expected.month) {
    return (actual.month - expected.month) * 500;
  }
  //If actual and expected year and month are equal, and actual day is greater than expected, you owe 15 per day over.
  if (actual.year === expected.year && actual.month === expected.month && actual.day > expected.day) {
    return (actual.day - expected.day) * 15;
  }
 
  return 0;
}