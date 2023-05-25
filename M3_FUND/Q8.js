/* 8. Write the function isEmpty(obj) which returns true if the object has no
properties, false otherwise.
Should work like:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {
    for (let key in obj) {
      // if the loop has started their is a property
      return false;
    }
    return true;
  }

