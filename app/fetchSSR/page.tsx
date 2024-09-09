export default async function fetchSSR(){
const response= await fetch("https://jsonplaceholder.typicode.com/users");
const users=await response.json()
console.log(users)
return <h2>User Page.......</h2>
}