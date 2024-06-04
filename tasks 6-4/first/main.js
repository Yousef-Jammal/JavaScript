/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// let childernNumber = Number(prompt("Please Enter number your child:"))
// let partnerName = prompt("Please Enter name your partner:")
// let geographicLocation = prompt("Please Enter geographic location:")
// let jobTitle = prompt("Please Enter your job title:")
// function tellFortune(CN, PN, GL, JT){
//     let paragraph = `You will be a ${JT} in ${GL}, and married to ${PN} with ${CN} kids.`
//     document.write(paragraph)
// }
// tellFortune(childernNumber, partnerName, geographicLocation, jobTitle)
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// let userOld = Number(prompt("Please Enter your name:"))
// function calculateDogAge(old){
//     let dogOld = old * 7
//     console.log(`Your doggie is ${dogOld} years old in dog years!`)
// }
// calculateDogAge(userOld)
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// let old3 = Number(prompt("How old are you (years):"))
// let cost = Number(prompt("how amount per day for you:"))
// function calculateSupply(age, amountPerDay){
//     let sumCost = age * 365 *amountPerDay
//     console.log(`You will need ${sumCost} to last you until the ripe old age of ${age}`)
// }
// calculateSupply(old3, cost)
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// let userName4 = prompt("Hi, how are you, Please Enter your name:");
// function greet(name) {
//     console.log(`Hello ${name}`)
// }
// greet(userName4)
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
// function double(cat) {
//     return 2 * cat;
//   }

//   function double(x) {
//     return 2 * x;
//   }

//   function double(x) {
//     return 2 * x;
//   }
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
// function double1(x){
//     return 2 * x ;
//   }

//   function double2 (x){
//   return 2 * x;
//   }

//   function (x) double3{
//     return 2 * x;
//   }
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// let number7 = Number(prompt("Please Enter a number:"))
// function cube(num){
//     let squre = Math.pow(num, 3)
//     /*
//     or
//     let squre = num * num * num
//     */
//    console.log(squre)
// }
// cube(number7)
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// let number81 = Number(prompt("Please Enter a number:"))
// let number82 = Number(prompt("Please Enter another number:"))
// function multiply(num81 , num82){
//     let squre = num81 * num82

//    console.log(squre)
// }
// multiply(number81, number82)
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// let userOld9 = Number(prompt('please enter number:'))
// function canIGetADrivingLicense(age){
//     if (age >= 20){
//         console.log("yes you can")
//     }
//     else {

//         console.log(`please come back after ${20 - age} years to get one`)
//     }
// }
// canIGetADrivingLicense(userOld9)
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// let number10_1 = Number(prompt("please enter a word:").length)
// let number10_2 = Number(prompt("please enter another word:").length)
// function sameLength10(num10_1, num10_2){
//     if (num10_1 == num10_2){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// sameLength10(number10_1, number10_2)
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// let number11_1 = Number(prompt("please enter a word:"))
// let number11_2 = Number(prompt("please enter another word:"))
// function largerNubmer11(num11_1, num11_2){
//     if (num11_1> num11_2){
//         console.log(num11_1)
//     }
//     else {
//         console.log(num11_2)
//     }
// }
// largerNubmer11(number11_1, number11_2)
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// let number12_1 = Number(prompt("please enter a word:"))
// let number12_2 = Number(prompt("please enter another word:"))
// let number12_3 = Number(prompt("please enter another word:"))
// function smallerNubmer12(num12_1, num12_2, num12_3){
//     if (num12_1 < num12_2 && num12_1 < num12_3){
//         console.log(num12_1)
//     }
//     else if (num12_2 < num12_1 && num12_2 < num12_3){
//         console.log(num12_2)
//     }
//     else {
//         console.log(num12_3)

//     }
// }
// smallerNubmer12(number12_1, number12_2, number12_3)

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
// let word13_1 = prompt("please enter a word:")
// let word13_2 = prompt("please enter another word:")
// let word13_3 = prompt("please enter another word:")
// let word13_4 = prompt("please enter another word:")
// let word13_5 = prompt("please enter another word:")

// let number13_1 = Number(word13_1.length)
// let number13_2 = Number(word13_2.length)
// let number13_3 = Number(word13_3.length)
// let number13_4 = Number(word13_4.length)
// let number13_5 = Number(word13_5.length)
// function shorterString13(num13_1, num13_2, num13_3, num13_4, num13_5){
//     if (num13_1 < num13_2 && num13_1 < num13_3 && num13_1 < num13_4 && num13_1 < num13_5){
//         console.log(word13_1)
//     }
//     else if (num13_2 < num13_1 && num13_2 < num13_3 && num13_2 < num13_4 && num13_2 < num13_5){
//         console.log(word13_2)
//     }
//     else if (num13_3 < num13_1 && num13_3 < num13_2 && num13_3 < num13_4 && num13_3 < num13_5){
//         console.log(word13_3)
//     }
//     else if (num13_4 < num13_1 && num13_4 < num13_2 && num13_4 < num13_3 && num13_4 < num13_5){
//         console.log(word13_4)
//     }
//     else if (num13_5 < num13_1 && num13_5 < num13_2 && num13_5 < num13_3 && num13_5 < num13_4){
//         console.log(word13_5)
//     }
// }
// shorterString13(number13_1, number13_2, number13_3, number13_4, number13_5)
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// let word13_1 = prompt("please enter a word:")
// let word13_2 = prompt("please enter another word:")
// let word13_3 = prompt("please enter another word:")
// let word13_4 = prompt("please enter another word:")
// let word13_5 = prompt("please enter another word:")

// let number13_1 = Number(word13_1.length)
// let number13_2 = Number(word13_2.length)
// let number13_3 = Number(word13_3.length)
// let number13_4 = Number(word13_4.length)
// let number13_5 = Number(word13_5.length)
// function longerString14(num13_1, num13_2, num13_3, num13_4, num13_5){
//     if (num13_1 > num13_2 && num13_1 > num13_3 && num13_1 > num13_4 && num13_1 > num13_5){
//         console.log(word13_1)
//     }
//     else if (num13_2 > num13_1 && num13_2 > num13_3 && num13_2 > num13_4 && num13_2 > num13_5){
//         console.log(word13_2)
//     }
//     else if (num13_3 > num13_1 && num13_3 > num13_2 && num13_3 > num13_4 && num13_3 > num13_5){
//         console.log(word13_3)
//     }
//     else if (num13_4 > num13_1 && num13_4 > num13_2 && num13_4 > num13_3 && num13_4 > num13_5){
//         console.log(word13_4)
//     }
//     else if (num13_5 > num13_1 && num13_5 > num13_2 && num13_5 > num13_3 && num13_5 > num13_4){
//         console.log(word13_5)
//     }
// }
// longerString14(number13_1, number13_2, number13_3, number13_4, number13_5)

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// let userNumber15 = Number(prompt("Please enter a number:"))
// function isEven(number){
//     if ( number % 2 == 0){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// isEven(userNumber15)
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

// let userNumber15 = Number(prompt("Please enter a number:"))
// function isEven(number){
//     if ( number % 2 == 1){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// isEven(userNumber15)

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

// let userNumber15 = Number(prompt("Please enter a number:"))
// function isEven(number){
//     if ( number < 0){
//         number = number * -1
//         /*
//         number = -number
//         */
//     }
//     return number
// }
// console.log(number)
// isEven(userNumber15)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// let word18_1 = prompt("please enter first name:")
// let word18_2 = prompt("please enter last name:")

// function fullName18(farstName18_1, lastName18_2){
//     console.log(farstName18_1, lastName18_2)
//     /*or
//     1
//     console.log(`${farstName18_1} ${lastName18_2}`)
//     2
//     console.log(farstName18_1 + " " + lastName18_2)
//     */
// }
// fullName18(word18_1, word18_2)
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// let number19_1 = Number(prompt("please enter a number:"));
// let number19_2 = Number(prompt("please enter another number:"));
// let number19_3 = Number(prompt("please enter another number:"));
// let number19_4 = Number(prompt("please enter another number:"));
// let number19_5 = Number(prompt("please enter another number:"));

// function average19(num19_1, num19_2, num19_3, num19_4, num19_5) {
//   let sum = 0;
//   sum = num19_1 + num19_2 + num19_3 + num19_4 + num19_5;

//   return sum / 5;
// }

// let x = average19(number19_1, number19_2, number19_3, number19_4, number19_5);
// console.log(x);

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// function random20(){
//     let randomNumber20 = Math.random()
//     return randomNumber20
// }
// console.log(random20())
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

// numberMin = Number(prompt("Please enter a number:"))
// numberMax = Number(prompt("Please enter anothor number:"))
// function random20(min, max){
//     let randomNumber20 = Math.random() + Math.floor(Math.random() * max) + min;
//     return randomNumber20;
// }
// console.log(random20(numberMin, numberMax))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// let number22 = Number(prompt("Please Enter a number"))
// function scoreInUniversty(num22){
//     if ( num22 <= 100 && num22 >=95){
//         console.log("A")
//     }
//     else if ( num22 <= 94 && num22 >= 85){
//         console.log("B")
//     }
//     else if ( num22 <= 84 && num22 >= 70){
//         console.log("C")
//     }
//     else if ( num22 <= 69 && num22 >= 50){
//         console.log("D")
//     }
//     else if ( num22 <= 49){
//         console.log("F")
//     }
// }
// scoreInUniversty(number22)

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

    // let sum23 = 0; 
    // function counter23(){
    //     return sum23 += 1
    // }
    // counter23()
    // counter23()
    // counter23()
    // console.log(sum23)

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// let sum24 = 1; 
// function counter24(){
//     return sum24 += 1
// }
// counter24()
// counter24()
// counter24()
// function resetCounter24(){
//     return sum24 = 1;
// }
// resetCounter24()
// console.log(sum24)