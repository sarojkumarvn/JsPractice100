//Qs1
let aq1 = 1;
let sum = 0;
while (aq1 <= 10) {
  sum = sum + aq1;
  aq1++;
}
console.log(sum);

//Qs2
let strq2 = "javascript";
for (let char of strq2) {
  // character of strq2 // For of Loop is Used in String
  console.log(char);
}

//QS3

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) console.log(i);
}

//Qs4
let numQ4 = 5;
do {
  console.log(numQ4);
  numQ4--; //first run these
} while (numQ4 >= 1); // Then check this condition output =  5 4 3 2 1

//Qs5
let fact = 1;
for (let i = 5; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);

// WRITE A NESTED LOOP TO PRINT A 3*3 GRID OF NUMBERS
/*
 1 2 3 
 1 2 3 
 1 2 3 

*/

var hold = 1;
for (let i = 1; i < 4; i++) {
  //starts from 1 to 3
  let str = "";
  for (let j = 1; j < 4; j++) {
    str += `${hold} `;
    hold++;
  }
  console.log(str);
}

//Qs7
let arrq7 = [1, 2, 3, 4];
let reversedArr = [];

for (let i = arrq7.length - 1; i >= 0; i--) {
  reversedArr.push(arrq7[i]);
}
console.log(reversedArr);

//Qs8
var numqs8 = 1;
while (numqs8 < 101) {
  numqs8++;
  if (numqs8 % 5 == 0) {
    console.log(numqs8);
  }
}

//Qs9

var obj = {
  name: "saroj",
  age: 20,
  job: "developer",
};
// To get the key values
for (var key in obj) {
  console.log(key);
}

//qs10
var qs10 = ["Extraction", "Jay Hanuman", "Sector 36", "Sultan"];

qs10.forEach(function (value) {
  console.log(value);
});
//Qs11
var qs11 = ["Extraction", "Jay Hanuman", "Sector 36", "Sultan"];
console.log(qs11[1]);

//Qs12
let qs12 = [12, 45, 2, 45, 64];
qs12.unshift(92, 56);
console.log(qs12);

//Qs13
var qs13 = [12, 45, 75, 34];
qs13.pop(); // used to remove the last element of an array
console.log(qs13);

//Qs14
var qs14 = [124, 578, 65, 55, 88, 8975, 657];
let updatedArr = qs14.slice(0, 4); // it wont take the 4th index
console.log(updatedArr);

//Qs15
var qs15 = [124, 578, 65, 55, 88, 8975, 657];
console.log(qs15.indexOf(65)); // It will show the index number of the element

//Qs16
var qs16 = [124, 578, 65, 55, 88, 8975, 657];
console.log(qs16.includes(578)); // it checks if the value exists in the array or not

//Qs17
var qs171 = [12, 45, 8];
var qs172 = [18, 456, 824];

console.log(qs171.concat(qs172)); // used for concat the elements of two arrays

//Qs18
//Sorting the array with Loop ====  bubble sort
var qs18 = [124, 578, 65, 55, 88, 8975, 657];
for (let j = 0; j < qs18.length - 1; j++) {
  // the array.length -1 refers to make the 6 out of 7 elements to its position and the last element will automatically go to its position
  for (var i = 0; i < qs18.length - 1; i++) {
    if (qs18[i] > qs18[i + 1]) {
      var temp = qs18[i];
      qs18[i] = qs18[i + 1];
      qs18[i + 1] = temp;
    }
  }
}

console.log(qs18);

//Qs19
var qs19 = [124, 578, 65, 55, 88, 8975, 657];

var arr2 = [];
//By using this we can copy the original array with out mutatinig the original one
qs19.forEach(function (value) {
  arr2.push(value * 2);
});
console.log(arr2);
