// JS Object == {
//    keys/properties: values,
//    keys/properties: values 
//}
const glass= {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(glass);
//All property name
const keys= Object.keys(glass);
console.log(keys)
//All property Values
const values=Object.values(glass);
console.log(values);
//property,value
const pair= Object.entries(glass);
console.log(pair);

//Array of array or 2D Array
//  [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

console.log(glass);

//we can delete any property: value pair
// //typ1
// delete glass.isCleaned;
//typ2
const {isCleaned,...rest}=glass;
// here we publish or copy a array into without publishing the desired property.
console.log(rest)

//freeze
// const
// Object.freeze(glass);
glass.source='Bangladesh';
glass.price=5000;
delete glass.isCleaned;
console.log(glass);

//object Seal (this is used to modify)

Object.seal(glass);
glass.price=8000;
console.log(glass);



// Object.keys()
// Object.values()
// Object.entries()
/**
 * type1:
 * delete object.property
 * type2: 
 * create an another object without taking the desired property
 * /
 *
 * 
// Object.freeze()   --> by applying this we cant modify or dellete anything 
// Object.seal()--> we can modify the existing property but can't create a new property