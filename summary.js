let posts=[
    {title:"Post One",body:"this is a post one",time:new Date().getTime()},
    {title:"Post two",body:"this is a post two",time:new Date().getTime()},
    {title:"Post three",body:"this is a post three",time:new Date().getTime()}
]
//promises
function getposts(){
    setTimeout(()=>{
    let output='';
    posts.forEach((post)=>{
    output=output+`<li>${post.title}, created ${Math.floor((new Date().getTime()-post.time)/1000)} seconds ago`
    });
    document.body.innerHTML=output; 
},1000); 
}
function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            if(true){
                resolve();
            }else{
                reject("Error:Some thing is fishy")
            }
        },2000);
    })
}
//createpost({title:"Post Four",body:"this is post four",time:new Date().getTime()})
//.then(getposts);

async function init(){
    await createpost({title:"Post Four",body:"this is post four",time:new Date().getTime()})
    getposts();
}
init();

