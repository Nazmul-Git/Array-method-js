// FLAT METHOD
const arr=[[1,2,3],[4,5,6],7,8,9];
console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrDeep=[[[1,2],3],[[4,5],6],7,8,9];
console.log(arrDeep.flat()); //[ [ 1, 2 ], 3, [ 4, 5 ], 6, 7, 8, 9 ]

console.log(arrDeep.flat(1)); //[ [ 1, 2 ], 3, [ 4, 5 ], 6, 7, 8, 9 ]
console.log(arrDeep.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]