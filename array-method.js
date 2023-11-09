//////////////////////////////////////////////////////////////
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
console.log([...arr]); //ES6: [ 'a', 'b', 'c', 'd', 'e' ]

//////////////////////////////////////////////////////////////

// Splice(index, count)

console.log(arr.splice(2)); //splice method delete from index 2 =[ 'c', 'd', 'e' ]
console.log(arr); //Now arr is = [ 'a', 'b' ]  we can see it change the main array.
const newArr=arr.splice(-1)
// console.log(newArr); //[ 'b' ]
newArr.push('x','y','z');
// console.log(newArr); //[ 'b', 'x', 'y', 'z' ]

console.log(newArr.splice(1,3)); //[ 'x', 'y', 'z' ]

//////////////////////////////////////////////////////////////

// Reverse
arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','f'];
console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
// console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ]

//////////////////////////////////////////////////////////////

// concat
const letters=arr.concat(arr2);
console.log(letters); //['a','b','c','d','e','f', 'g', 'h', 'i', 'j' ]

console.log([...arr, ...arr2]); //ES6: ['a','b','c','d','e','f', 'g', 'h', 'i', 'j' ]

//////////////////////////////////////////////////////////////

// Join()
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

//////////////////////////////////////////////////////////////

const numbers=[1,2,3,4,5,6,,7,8,9];
// getting first element of an array
console.log(numbers[0]); //1
console.log(numbers.at(0)); //1

// get last element of an array
console.log(numbers[numbers.length-1]); //9
console.log(numbers.slice(-1)); //[9]
console.log(numbers.slice(-1)[0]); //9
console.log(numbers.at(-1)); //9
// NOTE: at method also work for string method.
