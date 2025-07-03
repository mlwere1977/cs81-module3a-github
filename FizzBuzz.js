// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 2 Assignment 2B: FizzBuzz
// Date: 06/29/2025

/* You will write a JavaScript program that prints numbers from 1 to 120 using console.log() with the following rules:
Part 1: Basic Replacement Logic
    For numbers divisible by 4, print "Fizz" instead of the number
    For numbers divisible by 10 (but not 4), print "Buzz" instead
    For all other numbers, print the number itself
Part 2: Add Combined Condition
    For numbers divisible by both 4 and 10, print "FizzBuzz"
*/
/* This problem can be solved in a number of ways. One method is to dynamically construct the output string by appending "Fizz" and/or "Buzz" according to divisibility, 
and then print the number if nothing was appended. */

for (let Integer = 1; Integer <= 120; Integer++) {
  let output = "";

  if (Integer % 4 === 0) {
    output += "Fizz";
  }
  if (Integer % 10 === 0) {
    output += "Buzz";
  }

  // Print the number if the output is still an empty string.
  console.log(output || Integer);
}
