// 1- Write a program that prints numbers from 1 to 10 using a for loop.
i = 0;
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
console.log("qustion tow");
i = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
    continue;
  }
}
// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
console.log("qustion three");
var numbers = 1;
while (numbers <= 10) {
  console.log(numbers);
  numbers++;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
console.log("qustion fure");
number = prompt("Entre a number Please from 1 to 10");
i = 0;
for (let i = 1; i < 11; i++) {
  console.log(`${i} * ${number} = ${i * number}`);
}
// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
console.log("qustion five");
// var i = 0;
// var sum = 0;
// while ( i < 100) {
//   i += 1
//   sum += i;
// }
// console.log(sum);
// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
console.log("qustion six");
let numberUser = Number(prompt("Pleas Eenter a number"));
let sum2 = 1;
for (let i = 0; numberUser > 0; numberUser--) {
  sum2 = sum2 * numberUser;
}
console.log(sum2);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
console.log("qustion seven");
// let numberUser2 = prompt("Please enter a number to end the serie");
// let first = 1;
// let secend = 1;
// let end = 0;
// do {
//   end = first + secend;
//   console.log(end);
//   let first = secend;
//   let secend = end;
// } while (secend < numberUser2 || first < numberUser2);
// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.
console.log("qustion eight");
i = 20
while (i>1){
    if (i%5 == 0){
        console.log(i)
    }
    i--
}
