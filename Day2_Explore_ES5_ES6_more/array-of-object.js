const products=[
{id:1,name:'lenovo',price:65000},
{id:2,name:'dell',price:25000},
{id:3,name:'macbook',price:165000},
{id:4,name:'hp',price:50000}
]
//map
const names=products.map(product=>product.name)
console.log(names);
const prices=products.map(p=>p.price);
console.log(prices);

//forEach
products.forEach(p=>console.log(p.id));

//filter

const expensive=products.filter(p=>p.price>50000);
console.log(expensive);

//find

const affordable=products.find(p=>p.price<50000);
console.log(affordable);

//reduce
const total=products.reduce((acum,cur)=> acum+cur.price,0);
console.log(total);



//We can do looping in 6 technique in js
/**
 * 1.for
 * 2.for of
 * 3.map
 * 4.forEach
 * 5.while
 * 6.do While
 */
/**
 * we are also leaning 
 * 1.filter
 * 2.find
 * 3.reduce
 */
//we use 'for in' for itterate in object
//we use 'for of' for iterating in array and string