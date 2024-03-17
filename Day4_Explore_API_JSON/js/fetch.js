// fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => console.log(response))        //.json is not similer but close to JSON.parse()
    //   .then(json => console.log(json))
// fetch('https://jsonplaceholder.typicode.com/todos/1')


// Application Programable Interface 


const url='https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then(response=> response.json())
// .then(json => console.log(json))

function loadData(){
    fetch(url)
        .then(response=> response.json())
        .then(json => console.log(json))
}
let tol=4;
tol=parseFloat(tol)
console.log(tol)
