/* 2. What are the results of these expressions? */
"" + 1 + 0 = 10
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = 45px
"$" + 4 + 5 = $45
"4" - 2 = 2
"4px" - 2 = NaN
" -9 " + 5 = -4
" -9 " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2

//* Q3. Here’s a code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values). 
//Why? Fix it. The result should be 3.



let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3


/* Q4. What will be the result for these expressions?
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n" */

5 > 4 // → true
"apple" > "pineapple" // → false
"2" > "12" // → true
undefined == null // → true
undefined === null // → false
null == "\n0\n" // → false
null === +"\n0\n" //  → false

/* 5. Will an alert be shown?
if ("0") {
 alert( 'Hello' );
}
*/

An alert will not be shown as 0 is conisdered NaN

/* 6.  Rewrite this if using the conditional operator '?':
let result;
if (a + b < 4) {
 result = 'Below';
} else {
 result = 'Over';
} */

let result = (a + b < 4) ? 'Below' : 'Over';

/* 7. Write the delay method with arrow function, delay(func, ms)
 Should work like:
const hello = ( who )=> console.log(‘Hello ’ + who );
const delalyHello = delay(hello, 300);
delayHello(‘world’);
*/

