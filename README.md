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



*******Day 8: Dictionaries and Maps
Task: Create a dictionary which holds an unknown amount of names and associated phone numbers. This phone book dictionary must then output the results as name=phonenumber.


So it appears that I chose the wrong language to work through this task with. One of the test cases HackerRank uses features over 10,000 values for the phonebook to be filled with – and JavaScript would time out on this one specifically. As a result of not understanding this, I did finally come upon (and modified) a working JavaScript solution.

Process: The very first step is to get the input (number of entries, name, phone number) and split on the \n (newline). Our number of entries, n, is filled by using parseInt on the input – this should collect the “3” initially put in by HackerRank. Their input is “3 sam 99912222” so 3 is first up and easily grabbed. Initialize a phoneBook dictionary.

Then the values are added to the phoneBook via a for statement. Starting at 0 and going until = n, input value is added to newinput. Newinput is split with a space character and then finally we place it into phoneBook. Then you check if the values are in the dictionary with a second for statement. This simply grabs the input value and checks if “undefined.” If undefined, then output “Not found” and otherwise output name[i]=phonenumber.

***********Day 9: Recursion
Task
Write a factorial function that takes a positive integer, as a parameter and prints the factorial, Using Recursion technique.

Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of .

Sample Input

3
1
3
Sample Output

6
1
6




******Day 10: Binary Numbers
Task: Given a base-10 integer, n, convert it to a base-2 binary number. Then, find and print the resulting number (in base-10) of the maximum number of consecutive 1’s in n’s binary representation.


This problem initially threw me for a loop because I failed to understand what they were asking properly. For one, they expect you to return the count of consecutive 1s. So, in binary value 101, your number result would be 1. Because, even though there are two 1s in the result, they are not consecutive. Here is a bit of code I created first to collect the binary value as an array before discovering .toString(2) as a means to very quickly turn base-10 to base-2.

1
2
3
4
5
6
7
8
var binaryArray = [];
    while (n > 0){
        var remainder = n%2; //Get remainder value
        binaryArray.push(remainder); //For input 5 = n, the results are 5/2 has r 1, 2/2 has r 2, and 1/2 has r 1.
        n = n/2; //n becomes n/2 so we can collect next remainder
        n = Math.floor(n); //For input 5 = n, the results are 5/2 = 2, 2/2 = 1, and 1/2 = 0.
    }
<div class="open_grepper_editor" title="Edit & Save To Grepper"></div>
Process: First, read the value being passed in by HackerRank (initially 5) and convert it to a base-2 string. Also, create variables which will hold the counting of consecutive values temporarily during an If loop (count) and one which holds it throughout for eventual output to the console (max).

Use a For loop to iterate through binaryArray’s elements. Within this, utilize nested If-else statements. The first checks if element i is equal to 1 (because the task says to only seek consecutive 1s!). If so, increment count, which was initialized to 0, by 1. Then, if count is greater than max (which it will be if it had just been incremented up) set max = count. Else, if binaryArray element i doesn’t equal 1, reset count to 0 and loop again until completion.



******Day 11: 2D Arrays
Day11Task: Receive an input of a 6 x 6 2D array. Then, break it into 16 different hourglasses. An hourglass basically looks like the sidebar image. Within the array this orientation of values (3 elements to make up top bar, 1 for middle bar joining the halves together, and 3 items for the bottom bar). Determine which of the 16 hourglasses within the 2D array has the highest sum, and print out that sum.


Process: First, figure out what the lowest possible outcome for the hour glass count is. Because basically we should always be coming up with something higher for our end result. This lowest value is -63 (given HackerRank’s input that they can pass values from -9 to 9 into our array). -9 * 7 (each hourglass has 7 numbers) = -63.

*************Day 12: Inheritance
Objective
Today, we’re delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video!

Task
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:

A Student class constructor, which has 4 parameters:

A string, firstName.
A string, lastName.
An integer, id.
An integer array (or vector) of test scores, scores.
A char calculate() method that calculates a Student object’s average and returns the grade character representative of their calculated average:

Letter	Average (a)
O	90 <= a <= 100
E	80 <= a < 90
A	70 <= a < 80
P	55 <= a < 70
D	40 <= a < 55
T	a < 40
Input Format
The locked stub code in your editor calls your Student class constructor and passes it the necessary arguments. It also calls the calculate method (which takes no arguments).

You are not responsible for reading the following input from stdin:

The first line contains firstName, lastName, and id, respectively. The second line contains the number of test scores. The third line of space-separated integers describes scores.

Constraints:

1 <= |fistName|,|lastName| <= 10

|id| = 7

0 <= score,average <= 100

Output Format
This is handled by the locked stub code in your editor. Your output will be correct if your Student class constructor and calculate() method are properly implemented.

**********Day 13: Abstract Classes
Objective
Today, we will extend what we learned yesterday about Inheritance to Abstract Classes. Because this is a very specific object oriented concept, submissions are limited to the few languages that use this construct. Check out the Tutorial tab for learning materials and an instructional video.

Task
Given a Book class and a Solution class, write a MyBook class that does the following:

Inherits from Book
Has a parameterized constructor taking these  parameters:
string 
string 
int 
Implements the Book class' abstract display() method so it prints these  lines:
, a space, and then the current instance's .
, a space, and then the current instance's .
, a space, and then the current instance's .
Note: Because these classes are being written in the same file, you must not use an access modifier (e.g.: ) when declaring MyBook or your code will not execute.

Input Format

You are not responsible for reading any input from stdin. The Solution class creates a Book object and calls the MyBook class constructor (passing it the necessary arguments). It then calls the display method on the Book object.

Output Format

The  method should print and label the respective , , and  of the MyBook object's instance (with each value on its own line) like so:

Title: $title
Author: $author
Price: $price
Note: The  is prepended to variable names to indicate they are placeholders for variables.

Sample Input

The following input from stdin is handled by the locked stub code in your editor:

The Alchemist
Paulo Coelho
248
Sample Output

The following output is printed by your display() method:

Title: The Alchemist
Author: Paulo Coelho
Price: 248

***********Day 15: Linked Lists
Task: Create an insert function for a linked list. This should create a new node at the tail of the linked list (referenced by the head parameter). Then return the reference to the head node.


This is not a concept I was quite prepared for. After just getting my mind around arrays this other “sort” of array seems more confusing. Well, I at least have the basics down!

Process: The insert function should first check if head equals null, because this could happen in a test case. If it is, you don’t want the later statements to occur at all right now and instead should immediately create a new node and crown it as the head. With that out of the way, we can proceed to the else part of the statement.

When head equals our current node a while loop begins. Again, need to make sure things are good by checking that current.next does not equal null. So, while != null, we set current.next (next item in the linked list from current) to current. If we didn’t have the != null check, this code would break because there current.next would be null. While loop continues to step through the linked list until we arrive at the last item in the list (its current.next value is null).

While statement ends and we finally add our new node as current.next (aka, next from the previous last list item).


**************Day 16  Exceptions - String to Integer
Objective
Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message. Check out the Tutorial tab for learning materials and an instructional video!

Task
Read a string, , and print its integer value; if  cannot be converted to an integer, print Bad String.

Note: You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a  score.

Input Format

A single string, .

Constraints

, where  is the length of string .
 is composed of either lowercase letters () or decimal digits ().
Output Format

Print the parsed integer value of , or Bad String if  cannot be converted to an integer.

Sample Input 0

3
Sample Output 0

3
Sample Input 1

za
Sample Output 1

Bad String
Explanation

Sample Case  contains an integer, so it should not raise an exception when we attempt to convert it to an integer. Thus, we print the .
Sample Case  does not contain any integers, so an attempt to convert it to an integer will raise an exception. Thus, our exception handler prints Bad String.




*************Day 17More Exceptions

Objective
Yesterday's challenge taught you to manage exceptional situations by using try and catch blocks. In today's challenge, you will practice throwing and propagating an exception. Check out the Tutorial tab for learning materials and an instructional video.

Task
Write a Calculator class with a single method: int power(int,int). The power method takes two integers,  and , as parameters and returns the integer result of . If either  or  is negative, then the method must throw an exception with the message: n and p should be non-negative.

Note: Do not use an access modifier (e.g.: public) in the declaration for your Calculator class.

Input Format

Input from stdin is handled for you by the locked stub code in your editor. The first line contains an integer, , the number of test cases. Each of the  subsequent lines describes a test case in  space-separated integers that denote  and , respectively.

Constraints

No Test Case will result in overflow for correctly written code.
Output Format

Output to stdout is handled for you by the locked stub code in your editor. There are  lines of output, where each line contains the result of  as calculated by your Calculator class' power method.

Sample Input

4
3 5
2 4
-1 -2
-1 3
Sample Output

243
16
n and p should be non-negative
n and p should be non-negative
Explanation


:  and  are positive, so power returns the result of , which is .
:  and  are positive, so power returns the result of =, which is .
: Both inputs ( and ) are negative, so power throws an exception and  is printed.
: One of the inputs () is negative, so power throws an exception and  is printed


************Day 18: Queues and Stacks

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backwards and forwards. Can you determine if a given string, , is a palindrome?

To solve this challenge, we must first take each character in , enqueue it in a queue, and also push that same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our containers are empty (a non-match means  isn't a palindrome).

Write the following declarations and implementations:

Two instance variables: one for your , and one for your .
A void pushCharacter(char ch) method that pushes a character onto a stack.
A void enqueueCharacter(char ch) method that enqueues a character in the  instance variable.
A char popCharacter() method that pops and returns the character at the top of the  instance variable.
A char dequeueCharacter() method that dequeues and returns the first character in the  instance variable.
Input Format

You do not need to read anything from stdin. The locked stub code in your editor reads a single line containing string . It then calls the methods specified above to pass each character to your instance variables.

Constraints

 is composed of lowercase English letters.
Output Format

You are not responsible for printing any output to stdout.
If your code is correctly written and  is a palindrome, the locked stub code will print ; otherwise, it will print 

Sample Input

racecarObjective
Today, we're learning about Interfaces. Check out the Tutorial tab for learning materials and an instructional video!

Task
The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of .

Input Format

A single line containing an integer, .

Constraints

Output Format

You are not responsible for printing anything to stdout. The locked template code in the editor below will call your code and print the necessary output.

Sample Input

6
Sample Output

I implemented: AdvancedArithmetic
12
Explanation

The integer  is evenly divisible by , , , and . Our divisorSum method should return the sum of these numbers, which is . The Solution class then prints  on the first line, followed by the sum returned by divisorSum (which is ) on the second line.
Sample Output

The word, racecar, is a palindrome.


************Day 19: Interfaces
Objective
Today, we're learning about Interfaces. Check out the Tutorial tab for learning materials and an instructional video!

Task
The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of .

Input Format

A single line containing an integer, .

Constraints

Output Format

You are not responsible for printing anything to stdout. The locked template code in the editor below will call your code and print the necessary output.

Sample Input

6
Sample Output

I implemented: AdvancedArithmetic
12
Explanation

The integer  is evenly divisible by , , , and . Our divisorSum method should return the sum of these numbers, which is . The Solution class then prints  on the first line, followed by the sum returned by divisorSum (which is ) on the second line.


*********Day 20: Sorting

Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    int numberOfSwaps = 0;
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
            numberOfSwaps++;
        }
    }
    
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
    }
}
Task
Given an array, , of size  distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following  lines:

Array is sorted in numSwaps swaps.
where  is the number of swaps that took place.
First Element: firstElement
where  is the first element in the sorted array.
Last Element: lastElement
where  is the last element in the sorted array.
Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution.

Example


original a: 4 3 1 2
round 1  a: 3 1 2 4 swaps this round: 3
round 2  a: 1 2 3 4 swaps this round: 2
round 3  a: 1 2 3 4 swaps this round: 0
In the first round, the  is swapped at each of the  comparisons, ending in the last position. In the second round, the  is swapped at  of the  comparisons. Finally, in the third round, no swaps are made so the iterations stop. The output is the following:

Array is sorted in 5 swaps.
First Element: 1
Last Element: 4
Input Format

The first line contains an integer, , the number of elements in array .
The second line contains  space-separated integers that describe .

Constraints

, where .
Output Format

Print the following three lines of output:

Array is sorted in numSwaps swaps.
where  is the number of swaps that took place.
First Element: firstElement
where  is the first element in the sorted array.
Last Element: lastElement
where  is the last element in the sorted array.
Sample Input 0

3
1 2 3
Sample Output 0

Array is sorted in 0 swaps.
First Element: 1
Last Element: 3
Explanation 0

The array is already sorted, so  swaps take place and we print the necessary  lines of output shown above.

Sample Input 1

3
3 2 1
Sample Output 1

Array is sorted in 3 swaps.
First Element: 1
Last Element: 3
Explanation 1

The array  is not sorted, so we perform the following  swaps. Each line shows  after each single element is swapped.

After  swaps, the array is sorted.

********Day 21*******
********Day 22********
*******Day 23********
*******Day 24: More on Linked List
Objective
Check out the Tutorial tab for learning materials and an instructional video!

Task
A Node class is provided for you in the editor. A Node object has an integer data field, data, and a Node instance pointer, next, pointing to another node (i.e.: the next node in a list).

A removeDuplicates function is declared in your editor, which takes a pointer to the head node of a linked list as a parameter. Complete removeDuplicates so that it deletes any duplicate nodes from the list and returns the head of the updated list.

Note: The head pointer may be null, indicating that the list is empty. Be sure to reset your next pointer when performing deletions to avoid breaking the list.

Input Format
You do not need to read any input from stdin. The following input is handled by the locked stub code and passed to the removeDuplicates function:
The first line contains an integer, N, the number of nodes to be inserted.
The N subsequent lines each contain an integer describing the data value of a node being inserted at the list’s tail.

Constraints
The data elements of the linked list argument will always be in non-decreasing order.
Output Format
Your removeDuplicates function should return the head of the updated linked list. The locked stub code in your editor will print the returned list to stdout.

Sample Input
1
2
3
4
5
6
7
6
1
2
2
3
3
4
Sample Output
1
1 2 3 4
Explanation
N = 6, and our non-decreasing list is {1, 2, 2, 3, 3, 4}. The values 2 and 3 both occur twice in the list, so we remove the two duplicate nodes. We then return our updated (ascending) list, which is {1, 2, 3, 4}.

************25: Running time and complexity
Objective
Today we’re learning about running time! Check out the Tutorial tab for learning materials and an instructional video!

Task
A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given a number, n, determine and print whether it’s Prime or Not Prime.

Note: If possible, try to come up with a  primality algorithm, or see what sort of optimizations you come up with for an  algorithm. Be sure to check out the Editorial after submitting your code!

Input Format
The first line contains an integer, T, the number of test cases.
Each of the T subsequent lines contains an integer, n, to be tested for primality.

Constraints
1 <= T <= 30
1 <= n <= 2 X 109
Output Format
For each test case, print whether n is Prime or Not prime on a new line.

Sample Input
1
2
3
4
3
12
5
7
Sample Output
1
2
3
Not prime
Prime
Prime
Explanation
Test Case 0: n = 12.

12 is divisible by numbers other than 1 and itself (i.e.: 2, 3, 6), so we print Not prime on a new line.

Test Case 1: n = 5.

5 is only divisible 1 and itself, so we print Prime on a new line.

Test Case 2: n = 7.

7 is only divisible 1 and itself, so we print Prime on a new line.


Task: Given a number, n, determine and print whether it is prime or not prime.


Process: The first step is to taken HackerRank’s given input of numbers and split them by \n so we have each input value to be accessed separately. There is a messageArray which holds our not prime or prime strings since we’ll be using them a few times in the problem. Mainly, for these early If statements checking on some early inputs. I.e., 1 is not a prime number so it has a special If statement to capture it. On the other hand, two is defined as a prime number.

However, did you notice If(input % 2 == 0) returns not prime? Without our If(input == 2) then 2 would evaluate to not prime because 2 % 2 is 0. So that’s why the second If statement is there. Aside from 2, every other even number is not prime (because if nothing else it’s still divisible by 2!). The third If statement captures all even numbers to quickly return that they’re not prime.

The earliest prime numbers are 2, 3, 5, 7, 11, and 13. In the code so far, we properly evaluate up until 9. 9 must go through the For loop. Its square root is 3 and i is set to 3 initially. So the loop will execute once (for more than one reason). When the nested If runs it finds that 9 % 3 == 0 which means it’s not prime. Every odd number from 9 onward must go through the For loop for a limited amount of time.

That limit is the incrementing upward of i until it’s larger than the square root of input. If at no point the mod doesn’t evaluate to 0 then that means we’ve got a prime on our hands. Since the nested If loop never returns a value, we end the For loop and hop down to the next line which returns Prime. Finally, our resulting messages are printed to the console with \n in between each.

*************Day 26:Nested Logic
Task: Determine the late fee (if applicable) on a book returned to the library. HackerRank provides the actual date and expected date of return.


Process: First you need to collect the dates input by HackerRank. This is accomplished by splitting the input twice. First, by \n (actual date is on one line and expected date is on another). Then, split each of the two lines by space character to get the day, month, and year. Tricky!

Then you can send these along by calling calculateFine with actual and expected as parameters. This way, you can use content such as actual.year to grab the year value, and so on. From there it’s easy work to simply do a few If statements to determine how late something is and run a calculation. Then finally the late fee is printed to the console.


*************Day 27:Testing 

Task: This time around you’re not writing any code but should instead test the code with some input.


Process: There are rules for your input, so simply follow those when crafting the lines of input. Beyond that, there’s really nothing to this problem. I’ll admit that the expectation of what we’re supposed to do tripped me up. It seemed like there is more to it than this, but apparently not.

This problem is about unit testing.

Your company needs a function that meets the following requirements:

For a given array of  integers, the function returns the index of the element with the minimum value in the array. If there is more than one element with the minimum value, it returns the smallest one.
If an empty array is passed to the function, it raises an exception. A colleague has written this method. The implementation in Python is listed below. Implementations in other languages can be found in the code template.
def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")
    min_idx = 0
    for i in range(1, len(seq)):
        if a[i] < a[min_idx]:
            min_idx = i
    return min_idx
A coworker has prepared functions that will perform the tests and validate return values. Finish the implementation of  classes to provide data and expected results for the tests.

Complete the following methods.

In the class TestDataEmptyArray:

get_array() returns an empty array
In the class TestDataUniqueValues:

get_array() returns an array of size at least 2 with all unique elements
get_expected_result() returns the expected minimum value index for this array
In the class TestDataExactlyTwoDifferentMinimums:

get_array() returns an array where the minimum value occurs at exactly 2 indices
get_expected_result() returns the expected index
Take a look at the code template to see the exact implementation of functions that your colleague already implemented.

Note: The arrays are indexed from .

C++


22232425262728293031323334353637383940411
#include <algorithm>
#include <iostream>
#include <stdexcept>
#include <vector>
#include <cassert>
#include <set>

using namespace std;

int minimum_index(vector<int> seq) {
    if (seq.empty()) {
        throw invalid_argument("Cannot get the minimum value index from an empty sequence");
    }
    int min_idx = 0;
    for (int i = 1; i < seq.size(); ++i) {
        if (seq[i] < seq[min_idx]) {
            min_idx = i;
        }
    }
    return min_idx;
}

class TestDataEmptyArray {
public:
    static vector<int> get_array() {
        // complete this function
    }

};


Line: 22 Col: 1
Submit CodeRun Code
Upload Code as File
Test against custom input
Contest CalendarBlog

************Day 28: RegEx, Patterns, and Intro to Databases
Task: Given a string of people’s first names and email addresses, print out the names of folks with a gmail.com address in alphabetical order. Basically, this is meant to mimic what you might see in a database table.


As someone who uses databases on a near daily basis this would be a query I could write in my sleep. In JavaScript, however, it’s a bit more work.

Process: Use RegExp (something you can also use in SQL) which will check for the phrase “@gmail.com” in the upcoming strings provided by HackerRank. There’s also an array called names which will hold, well, the first names. The for statement iterating through the lines of input was provided by HackerRank as well. It basically just gives us firstName as a variable as well as emailID. How kind of them.

With that taken care of we check on emailID with our RegExp “@gmail.com” and if we find it then we get to push the firstName onto our names array! With the names all nicely in our array, we finally sort alphabetically and print them out.

*************Day 29:

