// Funksioni validate kontrollon vlefshmërinë e të dhënave të futura në fushat e formularit.

function validate(){
  var name = document.getElementById("name").value;
 
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  // Vendosja e padding për mesazhin e gabimit për të përmirësuar dukshmërinë vizuale.
  error_message.style.padding = "10px";
  
  
  var text;
  if(name.length < 3){
    text = "Vendosni nje emer jo me pak se 3 karaktere";
    error_message.innerHTML = text;
    return false;
  }
  
    // Kontrollon nëse emaili nuk përmban simbolin "@" ose është më i shkurtër se 6 karaktere.
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Vendosni emailin tuaj ne formatin example@gmail.com";
    error_message.innerHTML = text;
    return false;
  }
   // Kontrollon nëse mesazhi është më i shkurtër se 15 karaktere.
  if(message.length <= 15){
    text = "Me shume se 15 karaktere";
    error_message.innerHTML = text;
    return false;
  }

  // Nëse të gjitha kontrollet janë të suksesshme, shfaq një njoftim për dërgimin e suksesshëm të formularit.
  alert("Form Submitted Successfully!");
  return true;
}