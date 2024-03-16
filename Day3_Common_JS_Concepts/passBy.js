let num1=5;
let num2=7;
function multiply(num1,num2){
    num1=10;
    const result=num1*num2;
    return result;
}
console.log(num1);
const output=multiply(num1,num2);
console.log(output);


let student1={name:'Jalil',partner:'borsha'};
let student2={name: 'raj',partner:'anika'};
function makeMovie(c1,c2){
    c1.name='Ononta';
    c2.partner='meem';
}
makeMovie(student1,student2);
console.log(student1,student2)


let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);


const isTrue=true;
console.log(!isTrue ? "hello" : "world")

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);


   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }