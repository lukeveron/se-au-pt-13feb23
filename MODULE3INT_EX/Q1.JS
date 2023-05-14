/* 1. Uppercase the first character 
Write a function ucFirst(str) that returns the string str with the 
capitalized first character, for instance: 
 ucFirst("john") == "John";
*/

const str = 'luke';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str2 = arr.join(" ");
console.log(str2);