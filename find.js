// Find return 1st value  

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
const firstWithdraw=movements.find(mov=>mov<0);
console.log(firstWithdraw);
