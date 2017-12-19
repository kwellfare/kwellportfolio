window.onload = function () {
// Retrives the modal and finds the button
var modal = document.getElementById("privacymodal");

var btn = document.getElementById("btnprivacy");
    
var span = document.getElementsByClassName("close")[0];
// sets action to open modal on click

btn.onclick = function() {
    modal.style.display = "block";
    
}

span.onclick = function() {
    modal.style.display ="none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var popup = document.getElementById("popup");

var sub = document.getElementById("subscriber");
var subbed = document.getElementsByClassName("subscribed") ; 
var success = document.getElementById("success");
var closer = document.getElementsByClassName("closer")[0];
// sets action to open modal on click
    

sub.onclick = function() {
    popup.style.display = "block";
    
}

closer.onclick = function() {
    popup.style.display = "none";
}

subbed.onclick = function() {
    success.style.display = "block";
    
    
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}





}



