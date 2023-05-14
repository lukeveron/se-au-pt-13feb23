/* 4. Translate border-left-width to borderLeftWidth 
Write the function camelize(str) that changes dash-separated words like 
“my-short-string” into camel-cased “myShortString”. 
That is: removes all dashes, each word after dash becomes uppercased. 
Examples: 
camelize("background-color") == 'backgroundColor'; 
camelize("list-style-image") == 'listStyleImage'; 
camelize("-webkit-transition") == 'WebkitTransition';
*/

  function camelize(text) {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();  
    });
}
console.log(camelize("class-on-a-wednesday"))
console.log(camelize("border-left-width"))