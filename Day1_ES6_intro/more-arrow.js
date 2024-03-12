const difference =(x,y) =>x-y;
const multiply= (first,secound,third)=> first*secound*third;
//implicit and explicit
//explicit return a+b
//implicit a+b

//single perameter
const getAge= (person)=> person.age;
const student={name: 'Anannata', age:42};
const age=getAge(student);
console.log(age)

const getThird=numbers => numbers[2];
const third=getThird([5,6,8,9,12,3]);
console.log(third);

const doubleLeft= num =>num*2;


//no perametter

const getPi=()=> Math.PI;
console.log(getPi());


//large arrow function . if you want to get anything returned from this function . then you have to use the returned keyword
const reburt=(x,y,z)=>{
    const sum=x+y+z;
    const mult=x*y*z;
    const result= sum+mult;
    return result;
}