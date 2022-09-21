let url="https://js211kanhaiya.herokuapp.com/api"

async function join(event){
    if(event.key=="Enter"){

    
 let name=   document.getElementById("name").value 
 let status=   document.getElementById("status").value 
 let obj={
    name:name,
    status:status
 }
 
 let res= await fetch(`${url}/emplay`,{
    method:"POST",
    body:JSON.stringify(obj),
    
        headers:{
            'Content-Type':'application/json',
        }
    
 })
 res=await res.json()
 console.log(res)
    }
}