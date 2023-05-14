// 3. Use the following animals array for the below tasks. Test each one by printing the result to 
// the console. Review the following link for tips: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  



const animals = ['Tiger', 'Giraffe'] 
console.log(animals) 
 
// a)  Add 2 new values to the end 
animals.push('Lion');
animals.push('Zebra');

// conact method
let extraAnimals = ['dog', 'cat'];
const Animal2 = animals.concat(extraAnimals);

// b)  Add 2 new values to the beginning 
animals.unshift('Dragon')
console.log(animals);

// c)  Sort the values alphabetically 
animals.sort();

// d)  Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
const replaceMiddleAnimal = (newValue) => {
    let middleIndex = animals.length/2;
    console.log(middleIndex);
    animals[middleIndex] = newValue;
}

replaceMiddleAnimal('fox') // Zerba => fox
console.log(animals);

// e)  Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. Try to make it work  regardless of upper/lower case. 


 