function loadPosts(){
    console.log('Loading Posts Data');
    console.log('All data of users will be shown');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(user=>displayPosts(user))
}


/**
 * to append new new element inside of an existential element(4 steps)-
 * 1.call the container where you can add the new new elements
 * 2.create child element
 * 3.set innerText or innerHTML
 * 4.appendChild 
 */




function displayPosts(posts){
    console.log(posts);
    const postContainer=document.getElementById('post-container');
    for(const post of posts){
        const postDiv=document.createElement('div');
        console.log(post);
        postDiv.classList.add('poster')
        postDiv.innerHTML=` 
            <h4>user-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post ${post.body}</p>
        `
        postContainer.appendChild(postDiv);
    }
}
loadPosts();

