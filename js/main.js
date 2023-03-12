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