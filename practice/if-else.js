// 1. Check if a number is positive, negative, or zero.

/* function Number(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

  Number(5);  
  Number(-3); 
  Number(0);  
   */

//   2. Determine if a given year is a leap year.

/*  function LeapYear(year) {
    if (year % 4 === 0)
         {
            console.log(year +` is a leap year.`)
         }
     else 
     {
        console.log(year +` is not a leap year.`)
     }
  }
  
  LeapYear(2024); 
  LeapYear(1901); 
  LeapYear(2000); 
  
 
 */
//   3. Check if a character is a vowel or consonant.

/* function char(vowel) {
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
        console.log(vowel + " is a vowel.");
    } else {
        console.log(vowel + " is not a vowel.");
    }
}

char("a"); 
char("d");   */

// 4. Verify if a number is even or odd.

/* function EvenOdd(num) {
    if(num % 2 === 0)
    {
        console.log(num + " is even number")
        
    }
    else{
        console.log(num + " is odd number")
        
    }
}
EvenOdd(10)
EvenOdd(11)
 */

// 5. Determine the largest of three numbers.

/* function LargestNumber(num1,num2,num3)
{
    if(num1>=num2 && num1>=num3)
        {
            console.log("largest number is :"+num3);
        }
    else if(num2>=num1 && num2>=num3)
    {
        console.log("largest number is :"+num2)
    }
    else
    {
        console.log("largest number is :"+num3)
    }
            
}
LargestNumber(10,50,30)   */

// 6. Check if a number is divisible by 5 and 11.

/* function Divisible(num1,num2)
{
    if(num1 % 5 === 0 && num2 % 11 === 0)
    {
        console.log(num1 +" and "+ num2 + " is divisible by 5 and 11")
    }
    else{
        console.log(num1 +" and "+ num2 + " is not divisible by 5 and 11")
        }
}
Divisible(10,55) 
Divisible(10,30)  
Divisible(23,24) */

/* function Checker(char)
{
    if(char === char.toUpperCase())
    {
        console.log(char + " is uppercase");
        
    }
    else if(char === char.toLowerCase())
    {
        console.log(char + " is lowercase");
    }
}

Checker('A') 
Checker("s") */

// 8. Check if a number is divisible by 3 or 7.

/* function Divisible(num)
{
    if(num % 3 === 0 || num % 7 === 0)
    {
        console.log(num + " is divisible by 3 or 7")
    }
    else
    {
        console.log(num + " is not divisible by 3 or 7")
    }
}
Divisible(21)
Divisible(15)
Divisible(10)  */


// 9. Check if a triangle is equilateral, isosceles, or scalene.

/* function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      console.log("The triangle is equilateral.");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      console.log("The triangle is isosceles.");
    } else {
      console.log("The triangle is scalene.");
    }
  }
  

  checkTriangleType(5, 5, 5)
  checkTriangleType(5, 5, 3)
  checkTriangleType(5, 4, 3)
   */

//   10. Check if a number is a multiple of 10

/* function multi(num)
{
    if(num % 10 === 0)
    {
        console.log(num + " is a multiple of 10")
    }
    else
    {
        console.log(num + " is not a multiple of 10")
    }
}
multi(20)
multi(13) */

// 11. Determine if a given age qualifies for voting (age >= 18).

/* function age(num)
{
    if(num >= 18)
    {
        console.log(num + " eligible for voting")
    }
    else
    {
        console.log(num + " not eligible for voting");
        
    }
}
age(25)
age(17) */

// 12. Check if a year is a century year
/* 
function year(num)
{
    if(num % 100 === 0)
    {
        console.log(num + " is a century year");
        
    }
    else
    {
        console.log(num + " is not a century year");
    }
}
year(500)
year(252)   */


// 13. Check if a number lies between 1 and 100.

/* function Lies(num)
{
    if(num >= 1 && num <= 100)
    {
        console.log(num + " lies between 1 and 100");
    }
    else
    {
        console.log(num + " does not lie between 1 and 100");
    }

}
Lies(27)
Lies(101)   */

// 14. Verify if a character is a digit.

/* function Digit(num)
{
    if(num >= 0 && num <= 9)
    {
        console.log(num + " is a digit");
    }
    else
    {
        console.log(num + " is not a digit");
        
    }
}
Digit(5)
Digit(10)   */

// 15. Determine if a number is positive, negative, or zero without using the else keyword.
/* function  numbers(num)
{
    if(num > 0)
    {
        console.log(num + " is a positive number")
    }
    if(num < 0)
    {
        console.log(num + " is a negative number")
    }
    if(num == 0)
    {
        console.log(num + " is zero")
    }

}
numbers(3)
numbers(-3)
numbers(0)   
 */
// 16. Determine the smallest of three numbers.

/* function smallest(num1,num2,num3)
{
    if(num1 < num2 && num1 < num3)
    {
        console.log(num1 + " is the smallest number")
    }
    else if(num2 < num1 && num2 < num3)
    {
        console.log(num2 + " is the smallest number")
    }
    else
    {
        console.log(num3 + " is the smallest number")
    }
}
smallest(3,20,0.7) */

// 17. Check if a number is divisible by both 2 and 3.
/* 
function divisible(num)
{
    if(num % 2 == 0 && num % 3 == 0)
    {
        console.log(num + " is divisible by both 2 and 3")
    }
    else
    {
        console.log(num + " is not divisible by both 2 and 3");
        
    }
}
divisible(6)
divisible(7)
divisible(8)  */

// 18. Determine if a character is an alphabet or not.

// function alphabet(char)
// {
//     if(char >= 'a' && char <= 'z' || char >= 'A' && char <='Z')
//     {
//         console.log(char + " is an alphabet")
//     }
//     else
//     {
//         console.log(char + " is not an alphabet")
//     }
// }
// alphabet('a')
// alphabet('D')
// alphabet(1) 

// 19. Check if a person is eligible for a senior citizen discount (age >= 60).

/* function seniorCit(age)
{
    if(age >= 60)
    {
        console.log("You are eligible for senior citizen discount")
    }
    else
    {
        console.log("You are not eligible for senior citizen discount")
    }
}
seniorCit(65)
seniorCit(55)   */

// 20. Check if a number is a two-digit number.

/* function twoDigit(num)
{
    if(num >= 10 && num <= 99)
    {
        console.log(num + " is a two-digit number")
    }
    else
    {
        console.log(num + " is not two-digit number");
        
    }
}
twoDigit(25)
twoDigit(7)
twoDigit(100)
twoDigit(1.2) */

// 21. Check if a given number is prime or not.


// 22. Determine if a number is within the range of 10 to 50.

/* function checkRange(num)
{
    if(num >= 10 && num <= 50)
    {
        console.log(num + " is within the range of 10 to 50")
    }
    else
    {
        console.log(num + " is not in the range of 10 to 50")
    }
}
checkRange(25)
checkRange(65) */

// 23. Check if a number is a palindrome 

/* function palindrome(num)
{
    const a=num.toString()
    const b=a.split('').reverse().join('')
    if(a===b)
    {
        console.log(num + " is a palindrome")
    }
    else
    {
        console.log(num + " is not a palindrome");
        
    }
}
palindrome(121)
palindrome(123) 

 */

// 24. Verify if a character is a special character
/* function specialChar(char)
{
    if(char === '@' || char === '#' || char === '%' || char === '$' )
    {
        console.log(char + " is a Special Character");
        
    }
    else
    {
        console.log(char + " is not a Special Character");
    }
}
specialChar('@')
specialChar('a')  */

// 25. Check if two angles can form a right-angled triangle.
/* function rightAngle(angle1, angle2) 
{
    const angle3 = 180 - (angle1 + angle2);
  
    // Check if one of the angles is 90 degrees
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) 
    {
      console.log("The angles " + angle1 +" "+ angle2 + " can form a right-angled triangle.");
    } 
    else 
    {
      console.log("The angles " + angle1 +" "+ angle2 +  " cannot form a right-angled triangle.")
    }
  }
  
  rightAngle(30, 60) 
  rightAngle(45, 55) */

//   26. Determine if a character is an uppercase vowel.

/* function uppercaseVowel(char)
{
    if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
    {
        console.log(char + " is an uppercase vowel");
        
    }
    else
    {
        console.log(char + " is not an uppercase vowel");
    }
}
uppercaseVowel('O')
uppercaseVowel('o')
uppercaseVowel('R') 
uppercaseVowel('r')  */

// 27. Check if a given month has 31 days
/* function Days(month)
{
    if(month == 'january' || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december')
    {
        console.log(month + " has 31 days");
    }
    else if(month == 'february')
    {
        console.log(month + " has 28 days");

    }
    else
    {
        console.log(month + " has 30 days");
    }
}
Days('january')
Days('february')
Days('April') */

// 28. Determine if a number is a square of another integer.

/* function Square(n)
{
    let root = Math.sqrt(n);
    if(root == Math.floor(root))
    {
        console.log(n + " is a perfect square");
    }
    else
    {
        console.log(n + " is not a perfect square");
        
    }
}
Square(16)
Square(20) */

// 29. Verify if a number is in the range 100-200 inclusive.
/* function Range(n)
{
    if(n >= 100 && n <= 200)
    {
        console.log(n + " is range between 100 to 200");
        
    }
    else
    {
        console.log(n + " is not in range between 100 to 200");
    }
}
Range(150)
Range(250)
 */

// 30. Check if a string's length is greater than 5.
/* function Length(str)
{
    if(str.length > 5)
    {
        console.log(str + " length is greater than 5");
    }
    else
    {
        console.log(str + " length is less than or equal to 5");
    }
}
Length("Adnan")
Length("whassup") */

// 31. Determine if a number is divisible by either 4 or 6.

/* function Divisible(num)
{
    if(num % 4 == 0 || num % 6 == 0)
    {
        console.log(num + " is divisible by either 4 or 6");
    }
    else
    {
        console.log(num + " is not divisible by either 4 or 6");

    }
}
Divisible(12)
Divisible(15) */

// 32. Check if a character is a letter, digit, or special character.

/* function CheckChar(char)
{
    if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z')
    {
        console.log(char + " is a letter");
    }
    else if(char >= '0' && char <= '9')
    {
        console.log(char + " is a digit");
    }
    else
    {
        console.log(char + " is a special character");
    }
}
CheckChar('a')
CheckChar('1')
CheckChar('@')  */

// 33. Verify if a number is a perfect number
/* 
function isPerfectNumber(num) {
  
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    if (sum === num && num !== 0) {
        console.log(num + " is a perfect number");
  }
  else 
  {
    console.log(num + " is not a perfect number");
  }
}
isPerfectNumber(1)
isPerfectNumber(6)
 */

// 34. Determine if a given string is empty.
/* function isEmpty(str) 
{
    if(str.length === 0)
    {
        console.log("The string is empty");
    }
    else
    {
        console.log("The string is not empty");
    }
}
isEmpty("")
isEmpty("Hello")  */

// 35. Check if a number is greater than the product of two other numbers.
/* function checkNumber(num, num1, num2) 
{
    if(num > num1 * num2)
    {
        console.log(num + " is greater than the product of " + num1 + " and " + num2 )
    }
    else
    {
        console.log(num + " is not greater than the product of " + num1 + " and " + num2)
    }
}
checkNumber(10, 2, 3)
checkNumber(5, 2, 3)  */

// 36. Determine if a number is closer to 100 or 200.
/* function checkNumber(num)
{
    if(Math.abs(num - 100) < Math.abs(num - 200))
    {
        console.log(num + " is closer to 100")
    }
    else
    {
        console.log(num + " is closer to 200")
    }
}
checkNumber(149)
checkNumber(150)  

function Number(num)
{
    if(num <= 100 || num < 150 )
    {
        console.log(num + " is closer to 100")
    }
    else
    {
        console.log(num + " is closer to 200")
    }
}
Number(80)
Number(800) */

// 37. Check if a character is a lowercase vowel.
/* function checkChar(char)
{
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    {
        console.log(char + " is a lowercase vowel")
    }
    else
    {
        console.log(char + " is not a lowercase vowel")
    }
}
checkChar('a')
checkChar('A')
checkChar('q')  */

// 38. Verify if a number is a power of 2.
/* function checkPower(num)
{
    if(num > 0 && (num & (num - 1)) === 0)
    {
        console.log(num + " is a power of 2")
    }
    else
    {
        console.log(num + " is not a power of 2")
    }
}
checkPower(4)
checkPower(5) */

/* // 39. Determine if a number is divisible by 9 but not by 3.
function check(num)
{
    if(num % 3 === 0 && num % 9 != 0)
    {
        console.log(num + " is divisible by 3 but not by 9")
    }
    else
    {
        console.log(num + " is not divisible by 3 but not by 9")
    }
}
check(21)
check(27) */

// 40. Check if a year is before or after the 21st century.
/* function checkYear(year)
{
    if(year < 2000)
    {
        console.log(year + " is before the 21st century")
    }
    else if(year < 2100)
    {
        console.log(year + " is in the 21st century")
    }
    else
    {
        console.log(year + " is after the 21st century")
    }
}
checkYear(1999)
checkYear(2001)
checkYear(2100) */

// 41. Determine if a string starts with a vowel.
/* function checkString(str)
{
    let vowels = "a,e,i,o,u, A,E,I,O,U"
    if(vowels.includes(str[0]))
    {
        console.log(str + " starts with a vowel")
    }
    else
    {
        console.log(str + " does not start with a vowel")
    }
}
checkString("apple")
checkString("banana")
checkString("Adnan") 
 */

// 42. Verify if a number is positive, even, and divisible by 5.
/* function checkNumber(num)
{
    if(num > 0 && num % 2 == 0 && num % 5 == 0)
    {
        console.log(num + " is positive, even, and divisible by 5")

    }
    else
    {
        console.log(num + " is not positive, even, and divisible by 5")
    }
}
checkNumber(10)
checkNumber(15)
checkNumber(-10) */

// 43. Check if a character is an uppercase consonant.
/* function checkChar(char)
{
    if(char >= 'A' && char <= 'Z' && char != 'A' && char !='E' && char !='I' && char !='O' && char !='U')
    {
        console.log(char + " are uppercase consonant")
    }
    else
    {
        console.log(char + " is not an uppercase consonant")
    }
}
checkChar('E')
checkChar('a')
checkChar('B')  */

// 44. Determine if a number is less than the sum of its digits.
/* function checkNumber(num, num1, num2) 
{
    if(num > num1 + num2)
    {
        console.log(num + " is greater than the Sum of " + num1 + " and " + num2 )
    }
    else
    {
        console.log(num + " is less than the Sum of " + num1 + " and " + num2)
    }
}
checkNumber(10, 2, 3)
checkNumber(4, 2, 3) */

// 45. Check if a number lies in the range -10 to 10.
/* function checkNumber(num)
{
    if(num >= -10 && num <= 10)
    {
        console.log(num + " lies between the range of -10 to 10")
    }
    else
    {
        console.log(num + " does not lie between the range of -10 to 10")
    }
}
checkNumber(5)
checkNumber(15)
 */

// 46. Verify if a number is greater than 50 but not divisible by 5.
/* function checkNumber(num)
{
    if(num > 50 && num % 5 != 0)
    {
        console.log(num + " is greater than 50 and not divisible by 5")
    }
    else
    {
        console.log(num + " is not greater than 50 or divisible by 5")
    }
}
checkNumber(52)
checkNumber(60) */

// 47. Determine if the absolute value of a number is less than 100.

/* function checkNumber(num)
{
    if(num < 100)
    {
        console.log(num + " is less than 100")
    }
    else
    {
        console.log(num + " is greater than 100")
    }
}
checkNumber(50)
checkNumber(150)  */

// 48. Check if the product of two numbers is even or odd.
/* function checkProduct(num1, num2)
{
    let product = num1 * num2
    if(product % 2 == 0)
    {
        console.log("The " + product + " is even")
    }
    else
    {
        console.log("The " + product + " is odd")
    }
}
checkProduct(5, 6)
checkProduct(7, 3) */

// 49. Determine if a character is a whitespace character.
/* function checkChar(char)
{
    if(char == " ")
    {
        console.log(char + " is a whitespace character")
    }
    else
    {
        console.log(char + " is not a whitespace character")
    }
}
checkChar(" ")
checkChar("a")  */

// 50. Verify if a string is a palindrome.
/* function checkPalindrome(str)
{
    let reversedStr = str.split("").reverse().join("")
    if(str == reversedStr)
    {
        console.log(str + " is a palindrome")
    }
    else
    {
        console.log(str + " is not a palindrome")
    }
}
checkPalindrome("radar")
checkPalindrome("python")   */