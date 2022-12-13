let age = 32;
let userName = "Ciprian";
let hobbies = ["sports", "cooking", "reading"]; // arrays
let job = {
  companyName: "Company",
  team: "NIS",
  title: "Developer",
  place: "IS-RO",
}; // objects

// GOAL - code readability

// take an element based on its idx
const goals = ["learn web development", "learn algo", "do different chores"];
const getListItem = (arr, arrayIdx) => {
  let arrayElement = arr[arrayIdx];
  return arrayElement;
};

let myfirstGoal = getListItem(goals, 0);

// Math operations
// console.log(10 + 4);
// console.log(10 - 4);
// console.log(10 * 4);
// console.log(10 / 4);
// console.log(10 % 4);

let result = 10 + 3 - 5 * 10;
result = 10 * 4;

result++; // result = result + 1
result--; // result = result - 1

result += 5; // result =  result + 5
result -= 5; // result = result - 5
result /= 5; // result = result / 5
result *= 5; // result = result * 5

// String Operations
let username = "Ciprian";
console.log(username.length);
console.log(username.toUpperCase());

// Basic Array Operations
let myHobbies = ["Sports", "Cooking", "Coding"];
console.log(myHobbies.length);
