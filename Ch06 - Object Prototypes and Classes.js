/**************************************************************************************
*
* Eloquent JavaScript - Chapter 6: Object Prototypes, Classes, and Interfaces
*
***************************************************************************************
*/

// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");


// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;

// }


// function Rabbit(type) {
//   this.type = type;
// }

// Rabbit.prototype.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

// let weirdRabbit = new Rabbit("weird");




// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
