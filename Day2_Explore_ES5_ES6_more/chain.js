//Data access
const data=[{id:1,name:'abul',address:'kochu khet'}];
// console.log(data.address)
console.log(data[0].address);

const products={
    count: 5000,
    data: [
        {id:1,name:'lenovo', price: 65000},
        {id:2,name:'macbook',price:165000}
    ]
}
//2nd product price
console.log(products)
console.log(products.data)
console.log(products.data[1])
console.log(products.data[1].price)

const user={
    id:5001,
    name:'Shariful',
    address:{
        street:{
            first:'54/1 uttor side',
            secound: 'poribagh er goli',
            third:'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user);
console.log(user.address);
console.log(user.address.street);
console.log(user.address.street.secound);

const user2={
    id:5002,
    name:'proi bibir majar',
    address:{
        city:'Chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street?.secound)
console.log(user2.address.street?.secound)