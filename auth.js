const Verify=()=>{

  if(localStorage.auth){
  }
  
else{
  window.location.href="/login.html"
}
  }



const Logout = () => {
  alert("logged out");
  localStorage.removeItem("auth");
  window.location.href = "/login.html";
};

const myBtn = document.getElementById('mYBtn')




myBtn.addEventListener('click',Logout)



  Verify();
  
