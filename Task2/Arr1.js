// / 1. sort() Method:
// Question: You have an array of numbers:
// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// var arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// console.log("Before sorting ");
// console.log(arr);

// arr.sort((a,b)=>{
//     return a - b;
// });
// console.log("After sorting ");
// console.log(arr);


// 2. every() Method:
// Question: You have an array of numbers:
// let numbers = [2, 4, 6, 8, 10];

// var arr = [2, 4, 6, 8, 10];
// var output = arr.every((element)=>{
//     return element%2==0;
// });
// console.log(output);


// 3. some() Method:
// Question: You have an array of numbers:
// let numbers = [1, 3, 5, 7, 8, 9];

// var arr = [1, 3, 5, 7, 8, 9];
// var output = arr.some((element)=>{
//     console.log(element);
//     return element%2==0;
// });
// console.log(output);




// Map,Foreach,filter --------------------------------

// 1 == Create an array of 10 numbers and use forEach() to display each number in the console.

// var arr = [10,20,30,40,50,60,70,80,90,100];
// console.log("ForEach :");
// var output = arr.forEach((element)=>{
//     console.log(element);
// });

// 2 == Create an array of 5 numbers and use map() to create a new array containing the square of each number.

// var arr = [2,6,7,9,10];
// console.log("Map :");
// console.log("Before Square : ");
// console.log(arr);
// var output =  arr.map((element)=>{
//     return element*element;
// });
// console.log("After Square : ");
// console.log(output);

// 3 == Create an array of numbers from 1 to 20 and use filter() to create a new array containing only odd numbers.

// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// console.log("Filter :");
// console.log("Before filter : ");
// console.log(arr);

// var output = arr.filter((element)=>{
//     return element% 2 ==1;
// });
// console.log("After Filter : ");
// console.log(output);

// 4 == Create an array of 10 numbers and use filter() to find all numbers greater than 50.

// var arr = [10,20,30,40,50,60,70,80,90,100];
// console.log("Filter :");
// console.log("Before filter : ");
// console.log(arr);

//  var output = arr.filter((element)=>{
//     return element > 50;
// });
// console.log("After Filter : ");
// console.log(output);




// ---------------- Create an array of 8 numbers and: -----------------------

var arr = [2,4,6,8,10,12,140,160];

// 1 -- Use map() to multiply each number by 5.

console.log("Before map : ");
console.log(arr);

var output1 =  arr.map((element)=>{
    return element*5;
});
console.log("After map : ");
console.log(output1);

// 2 -- Use filter() to keep only numbers greater than 100.

console.log("Filter :");
console.log("Before filter : ");
console.log(arr);

var output2 = arr.filter((element)=>{
    return element>100;
});
console.log("After Filter : ");
console.log(output2);

// 3 -- Use forEach() to display the final result in the console.

var result = arr.forEach((element)=> {
    return arr;
});
console.log("Result : ");
console.log(result);
