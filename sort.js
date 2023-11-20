const arr=['Jonas','Sunny','Ovi','Opu','Abdul','Masuk','Zia'];
console.log(arr.sort());

const numbers=[10,5,8,7,3,1,9,6,2,4];
// console.log(numbers.sort()); //Did not work for number


// 1. When return value is < 0 , then (keep order) = (a b)
// 2. When return value is > 0 , then (switch order) = (b a) 

// ASCENDING ORDER

// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if(a<b) return -1;
// })
// console.log(numbers);


// SHORT CUT
numbers.sort((a,b)=>a-b);
console.log(numbers); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]


// DESCENDING ORDER

// numbers.sort((a,b)=>{
//     if(a>b) return -1;
//     if(a<b) return +1;
// })
// console.log(numbers);


// SHORT CUT
numbers.sort((a,b)=>b-a);
console.log(numbers); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// use for my purpose
console.log('short cut'.toUpperCase());