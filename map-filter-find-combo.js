const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const euroToUSD = 1.1;

// Think that how powerful it is!!! like- PIPELINE
const totalDeposit = movements
  .filter((mov) => mov > 0)
  .map((mov, i, arr) => {
    console.log(`'index'=${i} : item =${mov}`);
    console.log(arr);
    return mov*euroToUSD; //[ 5500, 3740.0000000000005, 9350 ]
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDeposit); //18590
// filter return a new array, map also return  new array & reduce return a value.
