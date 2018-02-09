



// contact form
"use strict";
var $ = function(id) { 
    return document.getElementById(id); 
};

var processEntries = function() {
    var header = "";
    var namehtml = "";
    var emailhtml = "";
    var phonehtml = "";
    var messagehtml = "";
    var required = "<span> Required Field</span>";
    var msg = "Please review entries & complete all fields";
    

    
//get values for user entries
var name = $("name").value;
var message = $("message").value;
var phone = $("phone").value;
var email = $("email").value;
    
// check for validity
if (name.length <=1 || name.length > 40 || name == "") { 

    name = required;
    header = msg;  
    
} 
    
if (message == "") { 
    message = required;
    header = msg;    
} 
    
    if (phone == "") {
    phone = required;
    header = msg;     
}
    if (email == "") { 
    email = required;
    header = msg;  
} 
    
    $("form-info").firstChild.nodeValue = header;
    // submit when all fields are valid
    if (header == msg) {
        namehtml = namehtml + "Name:" + name;
        emailhtml = emailhtml + "Email:" + email;
        phonehtml = phonehtml + "Phone:" + phone;
        messagehtml = messagehtml + "Message:" + message;
        $("name_validation").innerHTML = namehtml;
        $("email_validation").innerHTML = emailhtml;
        $("phone_validation").innerHTML = phonehtml;
        $("message_validation").innerHTML = messagehtml;
        
  event.preventDefault();
  
    
        
        
    } else {
        $("name_validation").innerHTML = "";
        $("email_validation").innerHTML = "";
        $("phone_validation").innerHTML = "";
        $("message_validation").innerHTML = "";
        $("contact_form").submit(); 
        
    } 


};



window.onload = function() {
    $("submit").onclick = processEntries;
    
    event.preventDefault();
    
    
   
    
    
}

