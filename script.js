// ===============================
// TYPING EFFECT
// ===============================

const words = [
    "4th Year BSIT Student",
    "Future Software Developer",
    "Web Developer",
    "Tech Enthusiast",
    "Lifelong Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function type() {

    if (wordIndex === words.length) {
        wordIndex = 0;
    }

    currentWord = words[wordIndex];
    currentLetters = currentWord.slice(0, ++letterIndex);

    document.getElementById("typing").textContent = currentLetters;

    if (currentLetters.length === currentWord.length) {

        setTimeout(() => {

            erase();

        }, 1500);

    } else {

        setTimeout(type, 100);

    }
}

function erase() {

    currentLetters = currentWord.slice(0, --letterIndex);

    document.getElementById("typing").textContent = currentLetters;

    if (currentLetters.length === 0) {

        wordIndex++;

        setTimeout(type, 300);

    } else {

        setTimeout(erase, 50);

    }

}

type();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// ACTIVE NAVBAR LINKS
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat-box h1");

counters.forEach(counter => {

    const updateCounter = () => {

        const targetText = counter.innerText;

        let target = parseInt(targetText);

        let current = Number(counter.getAttribute("data-count")) || 0;

        const increment = Math.ceil(target / 80);

        if (current < target) {

            current += increment;

            counter.innerText = current;

            counter.setAttribute("data-count", current);

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = targetText;

        }

    };

    updateCounter();

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const hiddenElements = document.querySelectorAll(
".card, .project-card, .certificate-card, .timeline-item, .experience-card, .stat-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// PARALLAX HERO EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";

});


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footer = document.querySelector("footer p:last-child");

footer.innerHTML = `© ${new Date().getFullYear()} All Rights Reserved`;


// ===============================
// PRELOADER (OPTIONAL)
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});