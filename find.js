// Find return 1st value  

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const firstWithdraw=movements.find(mov=>mov<0);
console.log(firstWithdraw);


// flat()
const nestedArr=[[1,2],3,[4,[5,[6,7]]],8];
console.log(nestedArr.flat());  // [ 1, 2, 3, 4, [ 5, [ 6, 7 ] ], 8 ]
console.log(nestedArr.flat(2)); // [ 1, 2, 3, 4, 5, [ 6, 7 ], 8 ]
console.log(nestedArr.flat(3)); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const totalSum=nestedArr.map(num=>num).flat(3).reduce((acc,num)=>acc+num, 0);
console.log(totalSum); //36
 
const nestedArr2=[ 1, 2, 3, 4, 5, [ 6, 7 ], 8 ];
const totalSum2=nestedArr2.flatMap(num=>num).reduce((acc,num)=>acc+num);
console.log(totalSum2); //36
