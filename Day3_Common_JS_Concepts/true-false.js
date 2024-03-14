/**
 * Truthy:
 * 1.true
 * 2. any number (positive or negetive will be truthy) except 0
 * 3.Any string except empty string
 * 4.'0','false'
 * 5. {}
 * 6.[]
 * 7. {property: value}
 * 
 * 
 * Falsy:
 * 1. false
 * 2. 0 number
 * 3. ('')empty string
 * 4. undefined
 * 5.null
 * 6.
 * 
 */


// const x=false;
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x=4;
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x=-4;
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x=0;
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x='s';
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x='string';
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x='';
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }

// const x='0';
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }
// const x='0';
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }
// const x='false';
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }
// let x=null;
// console.log(x);
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }
let x={4:12,5:12,6:213};
console.log(x);
if(x){
    console.log('Value of x is truthy');
}
else{
    console.log('Value of x is falsy');
}
// let x=null;
// console.log(x);
// if(x){
//     console.log('Value of x is truthy');
// }
// else{
//     console.log('Value of x is falsy');
// }









// optional
//check falsy

// if(x===false){         //false
    
// }
// if(!x){                   //true                                      

// }

if (y=''){
    console.log('value is falsy')
}

const n=null;
if(!n){
    console.log('Value is falsy')
}


//check true

const k =' ';
if(!!x){   //'!!' double bang --> 
    console.log('Value is truthy');
}