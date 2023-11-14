// EQUALITY
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
console.log(movements.includes(-150)); //true

//SOME: CONDITION 
console.log(movements.some(mov=>mov === -150)); //true

// EVERY :- check all value by condition, when all is true/false then it return true/false.
console.log(movements.every(mov=>mov > 0)); //false

const movement = [5000, 3400, 150, 790, 3210, 1000, 8500, 30];
console.log(movement.every(mov=>mov > 0));  //true