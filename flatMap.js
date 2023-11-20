
// flatMap()

const nestedArr2=[ 1, 2, 3, 4, 5, [ 6, 7 ], 8 ];
const totalSum2=nestedArr2.flatMap(num=>num).reduce((acc,num)=>acc+num);
console.log(totalSum2); //36