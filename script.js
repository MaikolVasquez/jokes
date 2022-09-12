
// let titulo = document.getElementById("title")


// async function fsingUp(){

// const info = await fetch("/.netlify/functions/hello")
// .then(async response => response.json())
// .then(data => {    
 
// });

// }


// document.getElementById("registro").addEventListener("click",()=>{
//     registro()
// })

async function registro(){  

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    
   
  await fetch("/.netlify/functions/singup", {      
    method:"POST",      
    body: JSON.stringify({
        "email": email,
        "password": password
    }),
    headers:{
        "Content-Type": 'application/json'
    }    
  })
    .then((response) => {
       
    console.log("info successfully submitted")
    return response.json()

     })
     .then((data)=> {   
        location.replace("/login")     
        return data        
     })
    
    .catch((error) => alert(error));

};




// document.getElementById("login").addEventListener("click",()=>{
//     login()
// })


async function login(){  

let email = document.getElementById("email").value
let password = document.getElementById("password").value


await fetch("/.netlify/functions/singin", {      
    method:"POST",      
    body: JSON.stringify({
        "email": email,
        "password": password
    }),
    headers:{
        "Content-Type": 'application/json'
    }    
  })
    .then((response) => {
       
    return response.json()

     })
     .then((data)=> {   
        console.log(data)
        return data        
     })
    
    .catch((error) => alert(error));

};

