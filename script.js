

 
function Login(event)
{

    event.preventDefault()
  
    let Email = document.getElementById('email').value
    let pass = document.getElementById('password').value

    if(Email==="aktechs@gmail.com"&& pass==="123456"){
        localStorage.setItem('auth',true)
        window.location.href="index.html"

    }

else{
alert('wrong credentials')
}

}
 const Verify=()=>{

    if(localStorage.auth){
        window.location.href="/"
    }
    
    }
    
    
    Verify()





