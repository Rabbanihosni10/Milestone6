const max= Math.max(6,123,523,12,63,74,1213);
console.log(max)

//spread operator (... arr)
const numbers=[3,12,5,2,34,54,756,92];
const arrayMax= Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax)


//use spread operator to copy
const nums=[4,5,6,76,23,12];
const nums2=nums;
nums2.push(123);
console.log(nums2);


const friends=[4,5,87,9];
const bondhu =friends;
const dosto=[...friends]
bondhu.push(21);
console.log(bondhu);
console.log(friends);
console.log(dosto);
console.log([bondhu,friends,dosto]);


//advanced 
const sonkha=[...friends,999];     //add extra element while copying.
console.log(sonkha)
