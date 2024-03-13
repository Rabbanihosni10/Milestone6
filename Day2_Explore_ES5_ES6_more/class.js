const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'dell',price:25000},
    {id:3,name:'macbook',price:165000},
    {id:4,name:'hp',price:50000}
]
//every class has-
//1.some properties/attributes
//2.Methods
class Product{
    country='Bangladesh';     //field
    constructor(name){
        this.name=name
    }
    speak(talk){              //method
        console.log(`talking about ${talk}`)
    };
}

const lenovo= new Product('LE le Lenovo')
// console.log(lenovo);
// lenovo.speak('Obhai kita kou');

class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }   
}
const topon= new Teacher('Topon sir','Physics');
console.log(topon);
topon.lecture();

const rashid=new Teacher('Rashid sir', 'English');
console.log(rashid);