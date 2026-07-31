
/*=========================================
  Gayon Creative Studio
  script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      Sticky Header
    ==============================*/
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    /*==============================
      Smooth Scroll
    ==============================*/
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /*==============================
      Scroll Animation
    ==============================*/

    const reveals = document.querySelectorAll(
        ".service-card, .portfolio-card, .testimonial-card, .price-card, .why-box, .about-content, .about-image"
    );

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        reveals.forEach(element => {

            const top = element.getBoundingClientRect().top;

            if (top < windowHeight - 120) {

                element.classList.add("show");

            }

        });

    }

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /*==============================
      Active Navigation
    ==============================*/

    const sections = document.querySelectorAll("section");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

});

/*=========================================
 Back To Top Button
=========================================*/

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
 Mobile Menu (Future Ready)
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("open");

    });

}
