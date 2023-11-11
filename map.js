const euroToUSD = 1.1;
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

// map()
const usd = movements.map((mov) => mov * euroToUSD);
// console.log(usd);

// for of
const usdArr = [];
for (const mov of movements) {
  usdArr.push(mov * euroToUSD);
}
// console.log(usdArr);

/////////////////////////////////////////////////////////////
// movementDescription
const movementDescription = movements.map((mov, i) => {
  if (mov < 0) {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  } else {
    console.log(`Movement ${i + 1}: You deposit ${mov}`);
  }
  /**
Movement 1: You deposit 5000
Movement 2: You deposit 3400
Movement 3: You withdrew 150
Movement 4: You withdrew 790
Movement 5: You withdrew 3210
Movement 6: You withdrew 1000
Movement 7: You deposit 8500
Movement 8: You withdrew 30
         */
});

// console.log('movementDescription is',movementDescription);
/**
 * 
[
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined
]
 */

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// movementDescription1
const movementDescription1 = movements.map(
(mov, i) => {
  if (mov < 0) {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  } else {
    return `Movement ${i + 1}: You deposit ${mov}`;
  }
});

console.log("movementDescription1 is", movementDescription1);

/////////////////////////////////////////////////////////
// // movementDescription2
const movementDescription2 = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov < 0 ? "withdraw" : "deposited"} ${Math.abs(
      mov
    )}`
);
console.log("movementDescription2 is", movementDescription2);

// Note: Into map method inside callback function there no need to array parameter. We pass value and index into this callback parameter.And this callback return value inside the map function parameter.So we can say that, we do not call this callback function, it is the map method who will call this function for each of the array elements. Each time map method call callback,it return current value and current index and the whole array that's why no need to pass array in callback parameter.
