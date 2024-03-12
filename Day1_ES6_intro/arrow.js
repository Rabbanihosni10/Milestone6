//function declaration

// function add(a,b){
//     const result=a+b
//     return result;
// }
function add(a,b){
    return a+b;
}

//function expression

const add2=function(a,b){
    return a+b; 
}

//arrow function expression   it is introduced in ES6  
const add3= (a,b) => a+b;
const add4= (num1,num2,num3,num4) => num1+num2+num3+num4;
const multiply= (num1,num2) => num1*num2;


const sum=add(5,90);
console.log(sum);
const sum1=add3(5,95);
console.log(sum1);

const sum2=add4(4,5,6,7);
console.log(sum2);

const mult=multiply(3,4);
console.log(mult);