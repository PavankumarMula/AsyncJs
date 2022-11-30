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
 function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            let error=false;
            if(!error){
               resolve();
            }else{
               reject();
        }
        },1000)
    })
 }
 function deletepost(){
    setTimeout(()=>{
        return new Promise((resolve,reject)=>{
            if(posts.length>0){
                let lastele=posts.pop()
                resolve(lastele)
            }else{
                reject("Array is Empty Now")
            }
        })
    },1000)
 }

//createpost({title:"Post Three",body:"this is a Post Three",CreatedAt:new Date().getSeconds()}).then(getPosts)
//create4thPost({title:"Post Four",body:"this is a Post Four",CreatedAt:new Date().getSeconds()},createposts)

//deleting posts
createpost({title:"Post Three",body:"this is a Post Three",CreatedAt:new Date().getSeconds()})
.then(()=>getPosts(),deletepost()).then(()=>getPosts(),deletepost()).then(()=>getPosts(),deletepost()).then(()=>getPosts(),deletepost()) 
