//for of used --> Array, string 
//for in used --> Object


const numbers= [1,6,8,4];
// for(let i=0; i<numbers.length; i++){
// }
//while
for(const num of numbers){
    console.log(num);
}
const nobab= 'Siraj Ud Doula';
for(const char of nobab){
    console.log(char);
}

const glass= {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

// for(const key of glass){
//     console.log(glass.key)
// }
for (const key in glass){
    console.log(key);
    const value= glass[key];
    console.log(key,value);
}


//optional
const keys=Object.keys(glass);
console.log(keys);

for(const key of keys){
    console.log(key);
}
