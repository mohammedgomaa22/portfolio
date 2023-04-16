// Toggle NavBar
const showNav = () => {
    const btnToggle = document.querySelector(".navbar .toggle"),
        navBar = document.getElementById("nav");

    btnToggle.addEventListener("click", () => {
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
    liG.forEach((li) => {
        li.addEventListener("click", () => {
            // Remove class Name from btn 
            liG.forEach((li) => {
                li.classList.remove("active");
            });
            // Add class Name to btn 
            li.classList.add("active");
            // Remove Element to gallery
            pro.forEach((ele) => {
                ele.style.cssText = "opacity: 0; transform: rotateX(90deg)";
                setTimeout(() => {
                    ele.style.display = "none";
                }, 500);
                setTimeout(() => {
                    ele.style.height = "0";
                }, 200);
            });
            // Add Element to gallery
            setTimeout(() => {
                document.querySelectorAll(li.dataset.cat).forEach((ele) => {
                    ele.style.cssText = "display: flex;opacity: 1; height: 185px";
                });
            }, 500);
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
    
    if (localStorage.getItem("color")) {
        root.style.setProperty('--main-color', localStorage.getItem("color"));
    }

    color.forEach((ev) => {
        ev.addEventListener("click", () => {
            // Change Main color variable
            root.style.setProperty('--main-color', ev.id)
            window.localStorage.setItem("color", ev.id);
        });
    });
    // End Change color
};
options();
// ---------------------------------------------------------