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