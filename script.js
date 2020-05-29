
var usPassCombo = [
    {
         username: "Mario",
         password: "1234"
     },

     {
         username: "Luigi",
         password: "5678" 
     }

 ]

 function validate(){
     var username = document.getElementById("username").value
     var password = document.getElementById("password").value

     for(i = 0; i < usPassCombo; i++) {
         if(username == usPassCombo[i].username && password == usPassCombo[i].password){
             console.log(username + "successfully logged in !!")
         }
     }
 }

