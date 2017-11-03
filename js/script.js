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
                document.getElementById("project-list").scrollIntoView(true);
            }


        }

    }



};
