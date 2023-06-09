// Change Background img
const changeBackground = () => {
    const header = document.querySelector(".header"),
        imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
    // -------------
    setInterval(() => {
        let changeImg = Math.floor(Math.random() * imgArr.length);
        header.style.backgroundImage = `url(pic/${imgArr[changeImg]})`;
    }, 5000)
};
changeBackground();
// ---------------------------------------------------------
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
// ---------------------------------------------------------
// Scrolling
const scrolling = () => {
    const scrolling = document.querySelector(".scrolling"),
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // -------------------------
    window.addEventListener(("scroll"), () => {
        let scrollFromTop =  document.documentElement.scrollTop;
        scrolling.style.width = `${(scrollFromTop / height) * 100}%`;
    });
};
scrolling();
// ---------------------------------------------------------
// Scroll To Top
const scrollToTop = () => {
    const up = document.querySelector(".up");
    // -----------------
    up.onclick = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    // -----------------
    window.onscroll = function() {
        this.scrollY >= 800 ? up.classList.add("show"): up.classList.remove("show");
    }
}
scrollToTop();