const arr=['Jonas','Sunny','Ovi','Opu','Abdul','Masuk','Zia'];
console.log(arr.sort());

const numbers=[10,5,8,7,3,1,9,6,2,4];
// console.log(numbers.sort()); //Did not work for number


// 1. When return value is < 0 , then (keep order) = (a b)
// 2. When return value is > 0 , then (switch order) = (b a) 

// ascending order
numbers.sort((a,b)=>{
    if(a>b) return 1;
    if(a<b) return -1;
})
console.log(numbers);

// descending order
numbers.sort((a,b)=>{
    if(a>b) return -1;
    if(a<b) return +1;
})
console.log(numbers);