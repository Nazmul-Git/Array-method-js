// Slice(index, before this index)
let arr=['a','b','c','d','e'];
console.log(arr.slice(1)); //[ 'b', 'c', 'd', 'e' ] 

console.log(arr.slice(-1)); //[ 'e' ]

console.log(arr.slice(-arr.length,-4)); //[ 'a' ]
console.log(arr.slice(arr[0],1)); //[ 'a' ]

console.log(arr.slice(1,4)); //[ 'b', 'c', 'd' ]

// Did not change the main array, make a shallow copy of the main array
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]
// similarly..ES6 have ....
console.log([...arr]); //[ 'a', 'b', 'c', 'd', 'e' ]


// Splice(index, count)

console.log(arr.splice(2)); //splice method delete from index 2 =[ 'c', 'd', 'e' ]
console.log(arr); //Now arr is = [ 'a', 'b' ]  we can see it change the main array.
const newArr=arr.splice(-1)
// console.log(newArr); //[ 'b' ]
newArr.push('x','y','z');
// console.log(newArr); //[ 'b', 'x', 'y', 'z' ]

console.log(newArr.splice(1,3)); //[ 'x', 'y', 'z' ]



// Reverse
arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','f'];
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
// console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ]



