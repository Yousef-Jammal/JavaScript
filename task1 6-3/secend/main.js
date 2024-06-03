// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
x = 3;
y = 4;

if (x + y >10){
    console.log("Both numbers are greater than 10")
}
else if (x && y < 10){
    console.log("At least one number is not greater than 10")
}

// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
user ="yousef" ;
name ="yousef" ;

pass ="fsgff" ;
password ="bergd" ;

if( user == name && pass == password) {
    console.log("Access granted")
}
else {
    console.log("Access denied")
}


// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
x = 15;

if (10 <= x <= 20){
    console.log("The number is between 10 and 20")
}
else {
    console.log("The number is not between 10 and 20")
}

// 4- Write a program that to declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
age = 19;
license="" ;
if (age >= 18 || license == "yes"){
    console.log(
        "You can drive"
    )
}
else if (age < 18 && license == "no"){
    console.log("You cannot drive")
}
else{
    console("Please Write (yes) or (no)")
}
// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
x = -20;

if (x > 10 || x < 0){
    console.log("Invalid number")
}
else{
    console.log("Valid number")
}

// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
x = 23;

if (5 <= x <= 10 || 20 <= x <= 25){
    console.log("The number is valid")
}
else{
    console.log("The number is not valid")
}

// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".
password =  483290;
if (password == "secret" || "pasword"){
    console.log("Access granted")
}
else{
    console.log("Access denied")
}

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
x = 34;

if ( 0 <= x <= 100 && x % 2 == 0){
    console.log("The number is even and between 0 and 100")
}
else{
    console.log("The number is not even and/or not between 0 and 100")
}

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
x = 3;
y = -4;

if (x < 0 || y < 0){
    console.log("At least one number is negative")
}
else("Both numbers are positive")

// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
age = 19;
condition = "no";
if ( age < 18 || condition == "yes"){
    console.log("You qualify for a discount")
}
else("You do not qualify for a discount")