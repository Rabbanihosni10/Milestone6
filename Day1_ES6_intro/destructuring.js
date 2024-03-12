const actor={
    name: 'Ananta',
    age: 30, 
    phone: '01732268241',
    money: 2124368707908987
}
// const phone=actor.phone;
// const name=actor.name;
// const age=actor.age;
//
//
// if right side is an object left side destructuring will be object as well 
//use property name as variable that contains the property value
//object destructuring
const {phone,age:boyosh}=actor
console.log(phone);
console.log(boyosh);
// console.log(age);


//array destructureing
const numbers= [45,99,122];
const [fst,scnd,trd]=numbers;
const [x,y]=[12,66];

//advanced arraay 
function doubleThem(a,b){
    return [a*2,b*2];
}
const [prothom,dition]= doubleThem(6,9);
console.log(prothom,dition);

//araay distructure and object distructure