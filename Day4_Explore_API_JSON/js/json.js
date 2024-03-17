const user={id:1,name:'gorib amir',job:'actor'}
//Java Script Object Notation -JSON
// JSON.parse
const stringified=JSON.stringify(user);
// console.log(stringified);
// console.log(user);


const shop={
    owner: 'Alia',
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranbi',
        country: 'BD'
    },
    products:['Laptop','mic','monitor','Keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJSON=JSON.stringify(shop);
console.log(shopJSON);
console.log(typeof shop);
console.log(typeof shopJSON);
const  shopOBJ=JSON.parse(shopJSON);
console.log(shopOBJ);
console.log(typeof shopOBJ);