window.onload = function() {
    console.log("Bienvenido a la pagina del MUSEO SST");
};

function toggleinfo(sectionld) {
    const section = document.getElementById(sectionld);
    const info = section.querySelector("p");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
    } else {
        body.classList.add("dark-mode");
    }
}

