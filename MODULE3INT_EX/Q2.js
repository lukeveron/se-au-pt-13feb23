// Create a function truncate(str, max) that truncates a given string of text if its total 
// length is greater than the max length. It should return either the truncated text, with an 
// ellipsis (...) added to the end if it was too long, or the original text otherwise. 

const inputString = "Hello, today is so beautiful, let hangout";
const truncate1 = (str, max) => {
  //Get the length of the string 
  const stringLength = str.length;
  //Compare total length with the max length (provided from the method)
  //if it is greater than max length => substring the string follow by the ...
  //else show the original text

  const reducedString = str.substring(0, max);

  if (stringLength > max ) {
    return reducedString + '....';
  } 
  return reducedString;
}

//Clean code
const truncate2 = (str, max) => {
  //Get the length of the string 
  const stringLength = str.length;
  //Compare total length with the max length (provided from the method)
  //if it is greater than max length => substring the string follow by the ...
  //else show the original text

  const reducedString = str.substring(0, max - 4);

  if (stringLength > max) {
    return reducedString + '....';
  } 
  return reducedString;
}

console.log(truncate2(inputString, 10));
