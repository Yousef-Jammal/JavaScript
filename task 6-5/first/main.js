console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

// [ 1 , 7 , 9 , 45 ]

// ["Str" ,"alex","moh"]

// ['the','fox', 'over', 'lazy', 'dog' ]

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
// banana => fruits[1]
// Tomato => fruits[0]

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// let array = ["mansaf", "bototo", "banana", "tomato", "burger",
//  "footboal" , "teenes" ,"bascit boal0", "score", "runing",
//  "none1" ,"iDonNotKnow", "iDonNotKnow1","iDonNotKnow2","iDonNotKnow3" ]

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

// let array4 = [1,2,3,4]
// function firstOfArray(x){
//     console.log(x[0])
// }
// firstOfArray(array4)
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/


// let array5 = [1,2,3,4]
// function lastOfArray(x){
//     console.log(x[x.length-1])
// }
// lastOfArray(array5)

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

// let array6 = [0,5,7,9]
// array6.pop()
// array6.unshift
// array6.shift()
// array6.push
// console.log(array6)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/


// let array7 = [0,5,7,9]
// array7.pop()
// array7.unshift
// array7.shift()
// array7.push
// console.log(array7)

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
// let array8 = [1,4,5]
// function middleOfArray(x){

//     if (x.length%2 == 1){
//         console.log(x[x.length/2 - 0.5])
//     }
//     else{
//         console.log(`${x[x.length/2 -1]} ${x[x.length/2]}`)
//     }
// }
// middleOfArray(array8)

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

// let animals = ['cat', 'ele', 'bird']
// animals = ['zebra', 'elephant']

// console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

// let nums= [1,2,3,8,9]
// function arrayExceptLast(x){
//     x.pop()
//     return x
// }
// console.log(arrayExceptLast(nums))

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/

// let nums= [1,2,3,8,9]
// function addToEnd(x){
//     x.pop()
//     x.push(55)
//     return x
// }
// console.log(addToEnd(nums))

/* all the exercises below should solved 2 times: 1- for loop 2- while lopp */
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// let nums= [1,2,3,8,9]
// function sumArray(x){
//     let sum = 0;
//     for (let i = 0; i < x.length ; i++){
//         sum += x[i]
//     }
//     return sum
// }
// sumArray(nums)

/*  -------  or  ------  */

// let nums= [1,2,3,8,9]
// function sumArray(x){
//     let sum = 0;
//     let i = 0;
//     while ( i < x.length){
//         sum += x[i]
//         i++
//     }
//     return sum
// }
// sumArray(nums)

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// let nums= [2,1,3,8,9]
// function minInArray(x){
//     for (let i = 0; i < x.length ; i++){
//         if (x[1] >= x[0]){
//             x.splice(1,1)
//         } else{
//             x.splice(0,1)
//         }
//     }
//     if (x[1] >= x[0]){
//             x.pop()
//         } else{
//             x.shift()
//         }
//     return x
// }
// console.log(minInArray(nums))

/* ------- or ------- */

// let nums= [2,1,-3,8,9]
// function minInArray(x){
//     let i = 0;
//     while ( i < x.length){
//         i++
//         if (x[1] >= x[0]){
//             x.splice(1,1)
//         } else{
//             x.splice(0,1)
//         }
//     }
//     if (x[1] >= x[0]){
//             x.pop()
//         } else{
//             x.shift()
//         }
//     return x
// }
// console.log(minInArray(nums))

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// let nums= [1,2,3,8,9]
// let location = nums.indexOf(9)
// nums.splice(location,1)
// console.log(nums)

/* ------ or ------ */

// let nums= [1,2,3,8,9]
// let remove = 3;
// function removeFromArray(x,y){
//     for (let i = 0; i < x.length ; i++){
//         if ( x[i] == y){
//             x.splice(i,1)
//         }
//     }
//     return x
// }
// console.log(removeFromArray(nums,remove))

/* ------ or ------ */

// let nums= [1,2,3,8,9]
// let remove = 3;
// function removeFromArray(x,y){
//     let i = 0;
//     while ( i < x.length){
//         i++
//         if ( x[i] == y){
//             x.splice(i,1)
//         }
//     }
//     return x
// }
// console.log(removeFromArray(nums,remove))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// let nums= [1,2,3,8,9]
// function removeFromArray(x){
//     for (let i = 0; i < x.length ; i++){
//         if ( x[i]%2 == 0){
//             x.splice(i,1)
//         }
//     }
//     return x
// }
// console.log(removeFromArray(nums))

/* ------ or ------ */

// let nums= [1,2,3,8,9]
// function removeFromArray(x,){
//     let i = 0;
//     while ( i < x.length){
//         i++
//         if ( x[i] % 2 == 0){
//             x.splice(i,1)
//         }
//     }
//     return x
// }
// console.log(removeFromArray(nums))

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// let nums2= [1,2,3,8,9,77]
// function aveArray(x){
//     let sum = 0;
//     for (let i = 0; i < x.length ; i++){
//         sum += x[i]
//     }
//     return sum/2
// }
// console.log(aveArray(nums2))

/* ------ or ------ */

// let nums2= [1,2,3,8,9,77]
// function aveArray(x){
//     let sum = 0;
//     let i = 0 ; 
//     while (i < x.length ){
//         sum += x[i]
//         i++
//     }
//     return sum/2
// }
// console.log(aveArray(nums2))
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

let array= ['hie', 'yousef', 'how' , 'hi' , 'ho' ,'eu', 'hz']
function minInArray(all){
    // let min = [];
    for (let i=0; i < all.length ; i++){
        
        for (let z = 1; z < (all.length-1) ; z++){
            if (all[i].length <= all[z].length){
                delete all[z]
            } else{
                delete all[i]
                all.shift(all[z])
                all.splice(z+1,1)
            }
        }
    }
    return all
}
console.log(minInArray(array))

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// let string= "alex mercer madrasa rashed2 emad hala"
// let charecter = "a"
// function repeatChar(list,char){
//     let listNumber = [];
//     for (let i = 0 ; i < list.length ; i++){
//         if ( char == list[i]){
//             listNumber.push(list[i])
//         }
//     }
//     console.log(listNumber.length)
    
// }
// repeatChar(string, charecter)

/* --------- or --------- */

// let string= "alex mercer madrasa rashed2 emad hala"
// let charecter = "a"
// function repeatChar(list,char){
//     let listNumber = [];
//     let i = 0 ;
//     while ( i < list.length ){
//         if ( char == list[i]){
//             listNumber.push(list[i])
//         }
//         i++
//     }
//     console.log(listNumber.length)
    
// }
// repeatChar(string, charecter)


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// let nums= [44, 5, 4, 3, 2, 10]
// function powerElementIndex(array){
//     for (let i=0; i< array.length ; i++){
//         array[i] = array[i]**i
//     }
//     return array
// }
// console.log(powerElementIndex(nums))

/* --------- or --------- */

// let nums= [44, 5, 4, 3, 2, 10]
// function powerElementIndex(array){
//     let i=0;
//     while ( i< array.length){
//         array[i] = array[i]**i
//         i++
//     }
//     return array
// }
// console.log(powerElementIndex(nums))

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

let nums= [5,2,2,1,8,66,55,77,34,9,55,1]

function evenNumberEvenIndex(array){
    let all = [];
    for (let i = 0 ; i<array.length ; i++){
        if (array[i] % 2 == 0 && array.indexOf(array[i]) % 2 == 0 ){
            all += array[i]
        }
    }
    return all
}
console.log(evenNumberEvenIndex(nums))