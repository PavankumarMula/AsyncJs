// console.log("person1: shows ticket");
// console.log("person2: shows ticket");
// const promiseWifeBrinigingTickets=new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         resolve("ticket")
//     },3000)
// })
// const getPopcorn=promiseWifeBrinigingTickets.then((t) =>{
//     console.log("wife: here are tickets")
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject) =>resolve(`${t}  popcorn`))
// })
// const getButter=getPopcorn.then((t)=>{
//     console.log('husband: i got the popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: no i need butter on my popcorn ');
//     return new Promise((resolve,reject)=>resolve(`${t} and butter`))
// })
// const getColddrinks=getButter.then((t)=>{
//     console.log("Husband:I got the butter");
//     console.log('wife:i need cool deinks');
//     return new Promise((resolve,reject)=>resolve(`${t} and cooldrinks`))
// })
// getColddrinks.then((t)=>console.log(t));
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie=async () =>{
//making promises
 const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ticket'),3000);
 });
 const getPopcorn=new Promise((resolve,reject) =>resolve('popcorn'));
 const addbutter=new Promise((resolve,reject)=>resolve('butter'))
 const getCoolDrinks=new Promise((resolve,reject)=>resolve('cool Drinks'))
//promise returnings

 let ticket=await promiseWifeBringingTicks;
 console.log(`wife:i have the ${ticket}`)
 console.log('husband:we should go in')
 console.log('wife:no i am hungry');

let popcorn=await getPopcorn;
 console.log(`wife:i have the ${popcorn}`)
 console.log('husband:we should go in')
 console.log('wife:no i need butter');

 let butter=await addbutter;
 console.log(`wife:i have the ${butter}`)
 console.log('husband:we should go in')
 console.log('wife:no i need cool drinks');

 let cooldrinks=await getCoolDrinks;
 console.log('wife:i have the cool drink')
 console.log('husband:we should go in')
 console.log('wife:yes');
return ticket;
}
preMovie().then((m)=>console.log(`person3 : shows ${m}`))
console.log("person4: shows ticket");
console.log("person5: shows ticket");