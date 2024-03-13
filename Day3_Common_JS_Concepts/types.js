//Strongly type language(programming language)

//int a=5;
//string b='alim halim khalim'
//bool c= True
//object student= { name: 'noya dhaman',id: 55}
//int[] numbers=[12,45,76]
//string[] friends=['abul','babul','kabil]


//Dynamic type language (JS)

// primitive type value 
const a=5;
const b= 'Samsu kopai na akhn r';
const d= true;

// Non primitive type value
const ages=[45,65,48];
const student={id:23,class:7};

console.log(typeof a, typeof b,typeof d, typeof ages, typeof student);

let x=5;
let y=x;
console.log(x,y); 
y=7;
console.log(x,y);

let p={
    job:'Web Devoloper'
}
let q=p;
// console.log(p,q);
// q={job:'Backend'}
// console.log(p,q);
q.job='front-end Developer';
console.log(p,q);
