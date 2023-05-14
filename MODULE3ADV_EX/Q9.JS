/*
a) Create a promise-based alternative randomDelay() that delays execution for a 
random amount of time (between 1 and 20 seconds) and returns a promise we can use 
via .then(), as in the starter code below
*/

function randomDelay() {
    //get a random amount of time (between 1 and 20)
    let delay = Math.ceil(Math.random() * 20);
    console.log(`${delay} seconds`);
    return new Promise((resolve, reject) => {
      if (delay < 10) {
        setTimeout(resolve, delay * 1000);
      } else {
        reject('Too long');
      }
    });
  }
  
/*
b) If the random delay is even, consider this a successful delay and resolve the promise, 
and if the random number is odd, consider this a failure and reject it
*/
  
  function randomDelayB() {
    //get a random amount of time (between 1 and 20)
    let delay = Math.ceil(Math.random() * 20);
    console.log(`${delay} seconds`);
    return new Promise((resolve, reject) => {
      //Checking the delay is odd or even number => even number => resolve otherwise => reject
      setTimeout((delay % 2 === 0) ? resolve : reject, delay * 1000);
    });
  }
  
  randomDelayB().then(() => console.log('Even delay seconds'))
                .catch(() => console.log('Odd delay seconds'));

/** 
 * d) Try to update the then and catch messages to include the random delay value
*/

function randomDelayD() {
    //get a random amount of time (between 1 and 20)
    let delay = Math.ceil(Math.random() * 10);
    console.log(`${delay} seconds`);
    return new Promise((resolve, reject) => {
      //Checking the delay is odd or even number => even number => resolve otherwise => reject
      setTimeout((delay % 2 === 0) ? resolve : reject, delay * 1000, delay);
    });
  }
  
  randomDelayD().then((delay) => console.log(`Sucessfully even delay ${delay} seconds`))
                .catch((delay) => console.log(`Failed odd delay ${delay} seconds`));