function main() {
  var n = parseInt(readLine());  //n = 4
  arr = readLine().split(' '); //"1 4 3 2" split into array elements [1, 4, 3, 2] (length: 4, index: 3)
  arr = arr.map(Number);
//I = arr.length-1 because length returns index + 1. IF we just set to arr.length then we would have I starting at 4, but no value in this array has index 4.
  
//MY CODE BEGINS HERE (the rest was given by HackerRank):
var myArray = "";
for (var i = arr.length-1; i >= 0; i--){ 
      myArray += arr[i] + " ";
  }
  console.log(myArray);
  
}
