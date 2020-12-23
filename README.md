# 30Days-of-Javascript

*** Day Two ****
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.
Process: Multiply mealCost by tipPercent and taxPercent each. Then multiply this value by 100 to get the expected result. Add the small tipPercent and taxPercent to mealCost. Use .toFixed(0) method. It sets the decimal place – in this case, 0 decimal places, or a whole number.



***Day Three***
Objective
In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video!

Task
Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If , print You are young..
If  and , print You are a teenager..
Otherwise, print You are old..
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.

Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer,  (the number of test cases), and the  subsequent lines each contain an integer denoting the  of a Person instance.

Constraints

Output Format

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print  or  lines (depending on whether or not a valid  was passed to the constructor).

Sample Input

4
-1
10
16
18
Sample Output

Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.
Explanation

Test Case 0: 
Because , our code must set  to  and print the "Age is not valid..." message followed by the young message. Three years pass and , so we print the young message again.

Test Case 1: 
Because , our code should print that the person is young. Three years pass and , so we print that the person is now a teenager.

Test Case 2: 
Because , our code should print that the person is a teenager. Three years pass and , so we print that the person is old.

Test Case 3: 
Because , our code should print that the person is old. Three years pass and the person is still old at , so we print the old message again.

The extra line at the end of the output is supposed to be there and is trimmed before being compared against the test case's expected output. If you're failing this challenge, check your logic and review your print statements for spelling errors.

JavaScript (Node.js)


3233343536373839404243454631304144
        console.log('You are old.');
    }
  };
  
   this.yearPasses=function(){
          // Increment the age of the person in here
          age += 1;
   };
}


Line: 44 Col: 20
Submit CodeRun Code
Upload Code as File
Test against custom input
Contest Calendar


*****Day Four****
Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. The constructor must assign initialAge to age after confirming the argument passed as initialAge is not negative; if a negative argument is passed as initialAge, the constructor should set age to 0 and print Age is not valid, setting age to 0. In addition, you must write the following instance methods:

yearPasses() should increase the age instance variable by 1.
amIOld() should perform the following conditional actions:
If age < 13, print You are young.
If age>=13 and age<18, print You are a teenager.
Otherwise, print You are old.
To help you learn by example and complete this challenge, much of the code is provided for you, but you’ll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don’t worry if you don’t understand it all quite yet!
Note: Do not remove or alter the stub code in the editor.

Input Format
Input is handled for you by the stub code in the editor.

The first line contains an integer, T(the number of test cases), and the T subsequent lines each contain an integer denoting the age of a Person instance. Hackerrank day 4 solution in C.

Sample Input
4
-1
10
16
18
Sample Output
Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.
Output Format
Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print 2 or 3 lines (depending on whether or not a valid initialAge was passed to the constructor).

You are old.
You are old.


*****Day Five****
iven an integer,n, print its first 10 multiples. Each multiple n * i (where 1<=i<=10) should be printed on a new line in the form: n x i = result.

Input Format
A single integer, n.

Constraints
2<=n<=20
Output Format
Print 10 lines of output; each line i(where 1<=i<=10) contains the result of n * i in the form: n x i = result.

Sample Input
2
Sample Output
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
For Loop Syntax

Code Explanation
Here n is an integer number we have to print the table of n, first take user input and store the value in ‘n‘. after that use a ‘for loop‘ and put the three condition in ‘for loop‘. Below is a for loop syntax.

So according to above syntax take a user input, and initialize the loop with i = 0 and put the condition i <= 10 and last condition is i++ or i =i+1.And multiplication i and n and print the result is according to the problem statement.


***** Day Six *****
Task: Basically take everything learned up to this point in #30daysofcode to complete the assignment. The goal requires strings to go through functions and end up output as a string where the even letters of the string (starting on 0) are printed first, then a space character, and then the odd letters of the string. So, “Hacker” (012345) comes out as “Hce akr” where the left letters are even and right are odd.

Process: Take the given strings (input) and turn them into an array. The demo fed in the strings “2 Hacker Rank” (each word separated by a \n newline). Then, push each character into an odd or even string depending on its number (starting from 0). This whole problem was much tougher than I thought it would be.





**** Day Seven ****
Task: Given an array of X amount of integers, print the array’s elements in reverse order as a single line of space-separated numbers.

This was a far simpler version of what we needed to do on Day 6, so it was a total breeze in comparison.


Process: Create a string variable which will hold our content to print out. Then run a for loop which goes through the array (decrementing by 1 each time) and sticks the array[index] value into myArray string. This proceeds, starting where i = arr.length-1 and ends when i becomes -1.

Why i = arr.length – 1? Because arr.length (in the case of the test case is 4 [1, 4, 3, 2]) is the array index + 1. The array we’re given has length of 4 but index of 3. Whatever the size of the array, its length is always index + 1. So to start from the length value alone wouldn’t work. We need to start with length – 1 and decremented down to the beginning array index of 0.



Day 8: Dictionaries and Maps
Task: Create a dictionary which holds an unknown amount of names and associated phone numbers. This phone book dictionary must then output the results as name=phonenumber.


So it appears that I chose the wrong language to work through this task with. One of the test cases HackerRank uses features over 10,000 values for the phonebook to be filled with – and JavaScript would time out on this one specifically. As a result of not understanding this, I did finally come upon (and modified) a working JavaScript solution.

Process: The very first step is to get the input (number of entries, name, phone number) and split on the \n (newline). Our number of entries, n, is filled by using parseInt on the input – this should collect the “3” initially put in by HackerRank. Their input is “3 sam 99912222” so 3 is first up and easily grabbed. Initialize a phoneBook dictionary.

Then the values are added to the phoneBook via a for statement. Starting at 0 and going until = n, input value is added to newinput. Newinput is split with a space character and then finally we place it into phoneBook. Then you check if the values are in the dictionary with a second for statement. This simply grabs the input value and checks if “undefined.” If undefined, then output “Not found” and otherwise output name[i]=phonenumber.


