/* function factorial(n) {
  // Complete this function
  var result = 1;
  for (i = n; i >= 1; i--) {
    result *= i
  }
  return result
}*/

function factorial(n) {
  if (n <= 1) {
          return 1;
      }
      else {
           return n * factorial(n - 1);
      }
      console.log(factorial(input));
  }
