/**
 * Try creating a json object for BOOK, the book should have a title, 
 * description, author and pages.
 */
const BookJSON = require("./Book.json")

// Print values

const title = BookJSON?.title ?? 'No title';
console.log(title);

const pages = BookJSON?.pages ?? 0;
console.log(pages);

// Add more field (Key, value) into JSON 
// price 50 pound 

BookJSON['price'] = 50 
console.log(BookJSON);
