const person={
    name:'kodom ali',
    job:'badam khai',
    3:'third',
    'add-dress':'kochu khet',
}
const prop='job';
console.log(person.job);
console.log(person['job']);
console.log(person[prop]);
console.log(person['3']);
console.log(person["add-dress"]);


function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));
const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);
const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);