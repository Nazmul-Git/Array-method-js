const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// filter
const deposit = movements.filter(mov=> mov>0);
console.log(deposit); //[ 5000, 3400, 8500 ]

// for of 
const depositFor=[];
for(const mov of movements){
    if(mov>0){
      depositFor.push(mov); 
    }
}
console.log(depositFor); //[ 5000, 3400, 8500 ]