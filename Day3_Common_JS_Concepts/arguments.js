

//arguments is an array like object
function sum(a,b,c){    //perametters
    const arr=[...arguments];
    // console.log(arguments);
    console.log(arr);
    // arguments.push(45);
    // console.log(arguments[4]);
    // console.log(typeof arguments);
    const result=a+b+c;
    return result;
}
// console.log(arguments);
const total=sum(45,89,12,21,43,56);    //arguments
console.log(total);
console.log(sum);
console.log(sum.length);    //by using that we can understand how many perametter are there in the function



