/**
 * Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge=2*dogAge.if the dog is > 2 years old, humanAge = 16 + dogAge * 4.
 * Exclude all dogs that are less than 18 human years old(which is the same as keeping dogs that are at least 18 years old)
 * calculate the average human age of all adult  dogs
 * run the function for both test database.
 *
 * test data 1: [5,2,4,1,15,8,3]
 * test data 2: [16,6,10,5,6,1,4]
 */

const calAge = ageArr => {
  const humanAge = ageArr.map(age=> (age <= 2 ? 2 * age : 16 + age * 4
  ));
//   console.log(humanAge);
  const adult=humanAge.filter(age=>age>=18);
//   console.log(adult);

  const avg=adult.reduce((acc, age)=>acc+age,0)/adult.length;
  return avg;
};
const avg1=calAge([5, 2, 4, 1, 15, 8, 3]); 
console.log(avg1); //44
const avg2=calAge([16,6,10,5,6,1,4]);
console.log(avg2); //47.333333333333336
