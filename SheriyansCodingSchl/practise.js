// QS1
console.log("My name is saroj", "fav hobby is coding");
//qs2
console.log(45 * 2 - 10);
//qs3
const year = new Date();
console.log(year.getFullYear());
//qs4
let firstName = "Saroj";
let lastName;
finalName = [];
let arr = ["kumar", "singhania", "rathore", "yadav", "samantray", "ojha"];
let arr2 = ["okay ", "bye ", "chalega"];
for (let i = 0; i < arr.length; i++) {
  if (i < arr2.length) {
    finalName.push(firstName + " " + arr2[i] + " " + arr[i]);
    console.log(finalName);
  } else {
    finalName.push(firstName + " " + arr[i]);
    console.log(finalName);
  }
}
//qs5
console.error(`something went wrong`)
//qs6
console.log(12*12)
//qs7
 var numberq7 = true ;
 console.log(typeof numberq7)

//qs8 
let ageq8 = document.getElementById("userAge")
let btnq8 = document.getElementById("btn")
function checkEligibility(){
   console.log(ageq8.value >= 18 ? "Eligible" : "Not Eligible")

}
btnq8.addEventListener("click" , checkEligibility)


