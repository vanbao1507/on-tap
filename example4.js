
 var data= [];

function clickBtn(){
    alert(13144)
   var nameValue = document.getElementById("name").value;
   var emailValue = document.getElementById("email").value;
   var passwordValue = document.getElementById("password").value;
   if(!nameValue || !emailValue || !passwordValue){
    alert("nhap du lieu vao")
    return
   };
   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(emailValue)) {
       alert("Please enter a valid email address.");
       
       return; 
   }
   data.push(nameValue);
   data.push(emailValue);
   data.push(passwordValue);
   console.log(data);
   
   
}