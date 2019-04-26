// Intro to Javascript Assessments

// Consider this variable:

var mantra = "Be the dev";

// 1. Write the code that returns 'B' from mantra.
var a = mantra.substring(1)
 console.log(a);

// 2. Write the code that determines if there is a 'x' in mantra.
if (mantra.indexOf('x')>=0) {
  console.log("Mantra in cludes X");
} else {
  console.log("No X is not there");
}
// 3. Write the code that determines if there is a 'v' in mantra.
if (mantra.indexOf('v')>=0) {
  console.log("Mantra includes v");
} else {
  console.log("No v is not there");
}
// Stretch: Write the code that returns the position of 'v' in mantra.
var b = mantra.indexOf('v')
console.log(b);

// Consider the following statement:

var codingIsEasy = 1
var imBored = 1
//

// // 4. Update the codingIsEasy and imBored variables above the statement to the values required to log "I need more!"
if (codingIsEasy && imBored) {
    console.log("I need more!")
} else {
    console.log("Steady as she goes")
}

// // Consider the following statement:
//
var imLost = false
var imFrustrated = false
//

//
// // 5. Update the imLost and imFrustated variables above the statement to the values required to log "Keep coding!"
if (imLost || imFrustrated) {
    console.log('Break time!')
} else {
    console.log('Keep coding!')
}
// // 6a. Recall the mantra variable from the first question. Write the code that logs each letter of mantra using a for loop.
for (i=0; i<mantra.length; i++){
  console.log(mantra[i]);
}
// // Stretch: Using a while loop.
var i = 0
while (i < mantra.length) {
  console.log(mantra[i]);
  i++;
}
// // Super Stretch: Using forEach().
// mantra.forEach() function (print {
//   console.log(print[i]);
// });

// // Consider the following variable:
//
 var message = 2
//
// // 7. Write a function that takes a string like message as an argument and returns the string without vowels.
// function remove(str) {
//   var newString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (typeof(str) != 'string'){
//       console.log(str);
//       console.log("Enter a string");
//     }
//      else if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
//        newString = newString+str[i];
//     };
//   };return newString
// };
// console.log(remove(message));
// // Stretch: Update your function to throw an exception if the argument is not a string.

// // Super Duper Stretch: Update your function to throw a TypeError if the argument is not a string.
//
// // Consider the following variable:
//
  var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
//
// // 8. Write a function that takes an array like toonimals and returns an array with only the toons that are cats.
// function saveCats(arr) {
//     var newArr = []
  // for(let i=0; i<arr.length; i++) {
// var newArr = []
let catsOnly = toonimals.filter(function(obj){
  return obj.animal ==='cat'
})
    // if (arr.filter(value => value.animal==="cat")) {
    //   newArr.push(arr[i])
    //   return newArr
    // }
  // }
}
// var toonimals = [ {name: 'Itchy', animal: 'mouse'}, {name: 'Stimpy', animal: 'cat'}, {name: 'Daffy', animal: 'duck'}, {name: 'Scratchy', animal: 'cat'}, {name: 'Ren', animal: 'dog'}, {name: 'Felix', animal: 'cat'}]
console.log(catsOnly);
