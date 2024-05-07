function toggleSidebar() {
    var sidebar = document.getElementsByClassName("listMenu")[0];
    if (sidebar) {
        if (sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
        } else {
            sidebar.classList.add("open");
        }
    }
    
}
function showContent(content) {
    var outputArea = document.getElementById("outputArea");
    outputArea.innerHTML = ""; // Önce içeriği temizle
    // İçeriği yükle
    if (content === 'home') {
        outputArea.innerHTML = "<h2>Home Content</h2>";
    } else if (content === 'news') {
        outputArea.innerHTML = "<h2>News Content</h2>";
    } else if (content === 'contact') {
        outputArea.innerHTML = "<h2>Contact Content</h2>";
    } else if (content === 'about') {
        outputArea.innerHTML = "<h2>About Content</h2>";
    }
}