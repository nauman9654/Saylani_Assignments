// Q1 Write a function that displays current date & time in your
// browser.

// function showDateTime() {
//     const now = new Date(); // Get current date and time
//     document.write("Current Date and Time: " + now);
//   }
  
//   showDateTime(); // Call the function
  

//  Q2 Write a function that takes first & last name and then it
// greets the user using his full name.

//   function greetUser(firstName, lastName) {
//     const fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
//   }
//   greetUser("Nauman", "Ahmed");
  

// Q3 Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// function addTwoNumbers() {
//     const num1 = +prompt("Enter first number:");
//     const num2 = +prompt("Enter second number:");
//     return num1 + num2;
//   }
//   alert("Sum is: " + addTwoNumbers());
  


// Q4 Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculator(num1, num2, operator) {
//     if (operator === '+') return num1 + num2;
//     else if (operator === '-') return num1 - num2;
//     else if (operator === '*') return num1 * num2;
//     else if (operator === '/') return num1 / num2;
//     else return "Invalid operator!";
//   }
  
//   const result = calculator(5, 3, '*');
//   alert("Result is: " + result);
  


// Q5 Write a function that squares its argument.
// function square(num) {
//     return num * num;
//   }
//   alert("Square of 4 is: " + square(4));

// Q6 Write a function that computes factorial of a number.

// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
//   alert("Factorial of 5 is: " + factorial(5));
  

// Q7 Write a function that take start and end number as inputs
// & display counting in your browser.

// function showCounting(start, end) {
//     for (let i = start; i <= end; i++) {
//     document.write(i + "<br>");
//    }
//   }
// const num1 = +prompt("Enter first number:");
//     const num2 = +prompt("Enter second number:");
//   showCounting(num1, num2);
  

// Q8 Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
  
//     const hypotenuse = Math.sqrt(
//       calculateSquare(base) + calculateSquare(perpendicular)
//     );
//     return hypotenuse;
//   }
  
//   alert("Hypotenuse is: " + calculateHypotenuse(3, 4));
  
// Q9 Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables



// i. Using values directly
// function areaOfRectangle(width, height) {
//     return width * height;
//   }
//   alert("Area (values): " + areaOfRectangle(5, 10));
  
//   // ii. Using variables
//   const w = 7;
//   const h = 4;
//   alert("Area (variables): " + areaOfRectangle(w, h));
  

// Q10 Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }
//   alert(isPalindrome("madam")); // true
//   alert(isPalindrome("hello")); // false

  
//   Q11 Write a JavaScript function that accepts a string as a
//   parameter and converts the first letter of each word of the
//   string in upper case.
//   EXAMPLE STRING : 'the quick brown fox'
//   EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeWords(str) {
//     return str.split(' ').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   }
//   alert(capitalizeWords('the quick brown fox'));
  

// Q12 Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longest = "";
  
//     for (let word of words) {
//       if (word.length > longest.length) {
//         longest = word;
//       }
//     }
//     return longest;
//   }
//   alert(findLongestWord("Web Development Tutorial"));
  

// Q13 Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countLetter(str, letter) {
//     let count = 0;
//     for (let char of str) {
//       if (char === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
//   alert(countLetter("JSResourceS.com", "o")); 
  

// Q14 The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2


// function calcCircumference(radius) {
//     const circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference);
//   }
  
//   function calcArea(radius) {
//     const area = Math.PI * radius * radius;
//     alert("The area is " + area);
//   }
  
//   calcCircumference(7);
//   calcArea(7);
  