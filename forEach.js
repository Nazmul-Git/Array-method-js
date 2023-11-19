//  ----------- Loop -------------
  
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for of
for(const move of movements){
    if(move<0){
        // console.log(`You withdrew ${Math.abs(move)}`);
       }else{
        // console.log(`You deposit ${Math.abs(move)}`);
       }
}

//   forEach()
movements.forEach(function(move){
   if(move<0){
    // console.log(`You withdrew ${Math.abs(move)}`);
   }else{
    // console.log(`You deposit ${Math.abs(move)}`);
   }
});

//using arrow function
movements.forEach((move)=>{
    if(move<0){
        // console.log(`You withdrew ${Math.abs(move)}`);
       }else{
        // console.log(`You deposit ${Math.abs(move)}`);
       }
});

// here,, forEach have a callback function that call by each array index value.
/**
 * 0:function(200)
 * 1:function(450)
 * 2:function(400)
 * 3:function(3000)
 * .......
 */


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//  use entries in for of loop we can get index number also
for(const [idx,move] of movements.entries()){
    if(move<0){
        // console.log(`Movement ${idx+1}: You withdrew ${Math.abs(move)}`);
       }else{
        // console.log(`Movement ${idx+1}: You deposit ${Math.abs(move)}`);
       }
};

// forEach take 3 parameter each value, index, array. forEach(mov, i, arr)
movements.forEach(function(move,idx,arr){
    if(move<0){
    //  console.log(`Movement ${idx}: You withdrew ${Math.abs(move)}`);
    }else{
    //  console.log(`Movement ${idx}: You deposit ${Math.abs(move)}`);
    }
    // console.log(arr);
 });



 ////////////////////////////////////////////////////////////
 const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach((value,key,map)=>{
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique=new Set(['USD', 'USD', 'GDP','EUR','EUR','USD']);

console.log(currenciesUnique);// {'USD', 'GDP', 'EUR'}
currenciesUnique.forEach(function(value,key,map){

  console.log(`${key} : ${value}`);
  /** OUTPUT: here key is exactly the same as the value.
   * USD : USD
     GDP : GDP
     EUR : EUR
   */
})

