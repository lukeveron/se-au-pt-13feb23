/* 9. There’s a ladder object that allows to go up and down
let ladder = {
 step: 0,
 up() {
 this.step++;
 },
 down() {
 this.step--;
 },
 showStep: function() { // shows the current step
 console.log( this.step );
 }
};
Modify the code of up, down and showStep to make the
calls chainable, like this:
ladder.up().up().down().showStep(); // 1 */

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

  