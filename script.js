/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close menu when link is clicked */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById("newsletterForm");

const message =
    document.getElementById("message");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email.trim() === "") {

        message.textContent =
            "Please enter your email.";

        return;

    }

    message.textContent =
        "Thanks for subscribing!";

    newsletterForm.reset();

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const contactMessage =
    document.getElementById("contactMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    contactMessage.textContent =
        "Your message has been received. Thank you!";

    contactForm.reset();

});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements =
    document.querySelectorAll(
        ".topic-card, .article-card, .featured-content, .about-content"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});