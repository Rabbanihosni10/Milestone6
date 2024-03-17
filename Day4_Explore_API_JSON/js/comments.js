const loadComments=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(ase=>ase.json())
    .then(node=>console.log(node))
    .catch(error => console.log('Error Happend',error))
}

const loadComments2= async()=>{
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/comments');
        const data=await res.json();
        console.log(data);
    }
    catch(error){
        console.error('Data Load Error')
    }

}

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);