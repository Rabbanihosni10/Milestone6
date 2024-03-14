/**
 * 8 ways to get undefined
 * 1. we declare a variable bt dont assign any value(let __) will get undefined 
 * 2.function with no return
 * 3.perameter that is not passed is undefined 
 * 4.If return has noting on the right side will return undefined
 * 5.property that doesnt exist on an object will give you undefined
 * 6.Accessing array element outside of the index range
 * 7.deleting an element inside an array
 * 8.set a value directly to ndefined
 */
// case 1
let first;
console.log(first);
// case 2
function secound(a,b){
    const total=a+b;
}
const result=secound();
console.log(result);
// case 3 
function third(a,b,c,d){
    const total=a+b+c+d;
    console.log(a,b,c,d);
}
third(2,5);
// case 4
function noNegetive(a,b){
    if(a<0 || b<0){
        return
    }
    return a+b;
}

const total1=noNegetive(2,-5);
console.log(total1);

// case 5
const fifth={
    id:2,
    name:'ponchom',
    age:40
}
console.log(fifth.age,fifth.salary);

//case 6
const sisth=[ 4,89,85,65,23];
console.log(sisth[1],sisth[5],sisth[200]);

//case 7
const sixth=[ 4,89,85,65,23];
//you should not do it. Instead use splice 
delete sixth[2];
console.log(sixth[2],sixth[5],sixth[200]);
console.log(sixth);


//case 8
const eighth =undefined;  //not recomended
//instead use
const ninth =null;
const data= { results: [], updated: null}
console.log(typeof undefined);
console.log(typeof null);
