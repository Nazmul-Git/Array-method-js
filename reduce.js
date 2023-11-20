//  REDUCE RETURN A VALUE

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const balance = movements.reduce((accumulator,currentValue,i,arr)=>{
    console.log(`index ${i} : ${accumulator}`);
    return accumulator+currentValue;
},0);
console.log(balance); //11720

// for loop
let balance2=0;
for(const mov of movements) balance2 += mov;
console.log(balance2); //11720



//  another example
const max= movements.reduce((acc,curr)=>{
   if(acc>curr)
     return acc;
   else
     return curr;
}, movements[0]);
console.log(max);


// ///////////////////////////////////////

// flatMap() & reduce()
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


const sum=accounts.flatMap(acc=>acc.movements).reduce((acu, cur)=>{
  cur > 0 ? acu.deposit += cur : acu.withdrew += cur;
  return acu;
}, {deposit : 0 , withdrew : 0});

console.log(sum);