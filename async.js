let posts=[
    {
     title:"Post One",
     body:"this is a post One",
     CreatedAt:new Date().getSeconds()
    },
    {
     title:"Post two",
     body:"this is a Post Two",
     CreatedAt:new Date().getSeconds()
    }
]
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output=output+`<li>${post.title},  ${post.CreatedAt} seconds ago</li>`
        })
        document.body.innerHTML=output;
    },1000)
}
function createposts(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}
function create4thPost(post,callback){
            callback(post,callback)
}
createposts({title:"Post Three",body:"this is a Post Three",CreatedAt:new Date().getSeconds()},getPosts)
getPosts();
create4thPost({title:"Post Four",body:"this is a Post Four",CreatedAt:new Date().getSeconds()},createposts)