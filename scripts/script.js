window.onload = function () {
    var proj = document.getElementsByClassName("project");
    var i;
  
    /* Toggles to diplay */

    for (i = 0; i < proj.length; i++) {
        proj[i].onclick = function () {
            
        
            this.classList.toggle("active");

            var item = this.nextElementSibling;
            if (item.style.display === "block") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
                /* Slides to bottom of open item*/
               
            }


        }

    }


};


document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});