console.log('Phone Hunting!');
const loadPhone=async()=>{
    const data=await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const res= await data.json();
    console.log(res);
    console.log(res.res);
    console.log(phone)
}

loadPhone();