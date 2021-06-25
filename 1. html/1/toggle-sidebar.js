var sidebar = document.getElementById("sidebar");
var mainContent = document.getElementById("main-content");
var controlBar = document.getElementById("control-bar");


function toggleSidebar () {

    if (sidebar.style.display){
        sidebar.style.display = "";
        mainContent.style.paddingLeft = "";
    }
    else{
        sidebar.style.display = "none";
        mainContent.style.paddingLeft = "0";    
    }
}


controlBar.addEventListener("click",)