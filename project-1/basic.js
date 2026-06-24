// Task:-1

// let studentName = prompt("Enter Your Name:");
// console.log(studentName);

// const collageNaame =  prompt("Enter Your Collage Name:");
// console.log(collageNaame);

// var age = Number(prompt("Enter Your Age: "));
// console.log(age);


// Task:-2

let city = ("Rajkot").innerHTML = "Ahmedabad";
console.log(city);


// Task:-3

// const country = 'India';

// country = 'USA';

// console.log(country);


// Task:-4

console.log(25 + 10);
console.log(25 - 10);
console.log(25 * 10);
console.log(25 / 10);
console.log(25 % 10);


// Task:-5

var count = 5;

console.log(count++);

console.log(count--);


// Task:-6

var marks = 50;

console.log(marks += 10);
console.log(marks -= 10);
console.log(marks *= 10);
console.log(marks /= 10);


// Task:-7

var salary = 10000;
salary += 2000;

console.log(salary);


// Task:-8

var x = 20;
var y = 30;
console.log(x == y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);


// Task:-9

var num1 = '10';
var num2 = 10;

console.log(num1 == num2);
console.log(num1 === num2);


// Task:-10

console.log(22 && true);


// Task:-11;

var isWeekend = false;
var isHoliday = true;

var officeClosed = isWeekend || isHoliday;
console.log("Office Closed:", officeClosed);


// Task:-12

var isLoggedIn = false;
console.log(!isLoggedIn)


// Task:-13

console.log("Hello Everyone !");
console.error("Error !");
console.warn("This is Warning message !");


// Task:-14

console.time();
for (let index = 1; index < 100000; index++) {

}
console.timeEnd();


// Task:-15

var student = ["Jay", "Rahul", "Om", "Kelvin", "Tirth"];

console.table(student);


// Task:-16

// console.clear();


// Task:-17

console.log(document.getElementById("heading"));


// Task:-18

console.log(document.getElementsByClassName('js'));


// Task:-19

console.log(document.getElementsByTagName('li'));


// Task:-20

document.querySelector("#title").innerHTML = "Hello  <i>Js</i>";

document.querySelector("#title1").innerText = "Hello JavaScript";

document.querySelector("#title2").textContent = "Welcome to JavaScript";

document.querySelectorAll("titles");  


// DATA TYPES:-


console.log(12, typeof (12));
console.log('jay', typeof ('jay'));
console.log(true, typeof (true));
console.log([11, 22, 33, 44, 55], typeof ([11, 22, 33, 44, 55]));
console.log(undefined, typeof (undefined));
console.log(12345678901234567890n, typeof (12345678901234567890n));
console.log(typeof (console.log));