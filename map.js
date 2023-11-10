const euroToUSD=1.1;
const movements= [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// map()
const usd=movements.map((mov)=> mov * euroToUSD);
console.log(usd);

// for of
const usdArr=[];
for(const mov of movements){
    usdArr.push(mov * euroToUSD);
}
console.log(usdArr);