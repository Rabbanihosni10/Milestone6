//var let const
//var: no reason to use var
//let: allow it to reassign the value
//const: dont allow it to reassign\

const money= 25;
/**
 * 
 */
console.log(money);
const rich= money+25;
console.log(rich);

let count= 0;
count=count+10;
// rich=count+rich;
console.log(count);
// console.log(rich);
const numbers=[23,12,12,32,34,5,1];
// numbers=[21,23,45,56,7];
numbers[1]=55;
numbers.push(111,235,55);
console.log(numbers)



//object

// const student1={
let student1={
    name:'moyna Pakhi',
    class:12
}
console.log(student1);
student1={name: 'kokil konthi'}
student1.name='mouyr konthi';
console.log(student1);

//loop
let sum=0;
for (let i=0;i<10;i++){
    const num=i;
    sum=sum+num;
}
console.log(sum);