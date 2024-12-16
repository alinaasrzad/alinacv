document.getElementById("modeToggle").addEventListener("click", function() {
    let themeLink = document.getElementById("theme-link");
    if (themeLink.getAttribute("href") === "light-mode.css") {
        themeLink.setAttribute("href", "dark-mode.css");
        document.getElementById("modeToggle").textContent = "تغییر به حالت روز";
    } else {
        themeLink.setAttribute("href", "light-mode.css");
        document.getElementById("modeToggle").textContent = "تغییر به حالت شب";
    }
});