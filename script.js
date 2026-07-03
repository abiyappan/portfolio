// ===========================
// Typing Animation
// ===========================

const text = [
  "Data Analyst",
  "Python Developer",
  "AI Enthusiast",
  "Frontend Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typing = document.getElementById("typing");

    if (typing) {
        typing.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;
            type();

        }, 1800);

    } else {

        setTimeout(type, 120);

    }

})();

// ===========================
// Scroll Reveal
// ===========================

const reveals = document.querySelectorAll(".section");

window.addEventListener("scroll", reveal);

function reveal() {

    reveals.forEach((section) => {

        const top = section.getBoundingClientRect().top;
        const visible = window.innerHeight - 120;

        if (top < visible) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

// Initial State
reveals.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";

});

reveal();

// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".box h1");

const runCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let current = 0;

        const speed = target / 80;

        const update = () => {

            current += speed;

            if (current < target) {

                counter.innerText = Math.floor(current);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

window.onload = runCounter;

// ===========================
// Active Navbar
// ===========================

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Back To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ===========================
// Project Card Hover Effect
// ===========================

document.querySelectorAll(".project").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ===========================
// Smooth Fade on Page Load
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});