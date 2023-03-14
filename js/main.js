// Toggle NavBar
const showNav = () => {
    const btnTogle = document.querySelector(".navbar .togle"),
        navBar = document.getElementById("nav");

    btnTogle.addEventListener("click", () => {
        if (navBar.style.width !== "100%") {
            navBar.style.width = "100%";
        } else {
            navBar.style.width = "0%";
        }
    });
};
showNav();
// ---------------------------------------------------------
// Gallery
const gallery = () => {
    const liG = document.querySelectorAll(".lang li"),
        pro = document.querySelectorAll(".gallery .pro");

    // Event
    liG.forEach((ev) => {
        ev.addEventListener("click", () => {
            // Remove class Name from btn 
            liG.forEach((ev) => {
                ev.classList.remove("active");
            });
            // Add class Name to btn 
            ev.classList.add("active");
            // Add Element to gallery  
            pro.forEach((ele) => {
                if (ele.classList.contains(`${ev.id}`)) {
                    ele.style.height = "185px";
                } else {
                    ele.style.height = "0";
                }
            });
        });
    });
};
gallery();
// ---------------------------------------------------------
// toggle options
const options = () => {
    // Start Show Options
    const opt = document.querySelector(".options"),
        tgl = document.querySelector(".options .toggle-btn");
    // -----------
    
    tgl.addEventListener("click", () => {
        opt.classList.toggle("active");
    });
    // End Show Options
    // -----------
    // Start Change color
    const root = document.querySelector(':root'),
        color = document.querySelectorAll(".options .colors .color");
    // -----------

    color.forEach((ev) => {
        ev.addEventListener("click", () => {
            // Change Main color variable
            root.style.setProperty('--main-color', ev.id)
            window.localStorage.setItem("color", ev.id);
        });
    });
    if (localStorage.getItem("color")) {
        root.style.setProperty('--main-color', localStorage.getItem("color"));
    }
    // End Change color
};
options();
