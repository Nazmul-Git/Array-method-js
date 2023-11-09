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
