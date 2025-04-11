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

qs10.forEach(function(value){
  console.log(value)
})
//Qs11
var qs11 = ["Extraction", "Jay Hanuman", "Sector 36", "Sultan"];
console.log(qs11[1])

//Qs12
let qs12 = [12,45,2,45,64]
qs12.unshift(92 , 56)
console.log(qs12)