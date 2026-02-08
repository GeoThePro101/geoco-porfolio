var typed = new Typed(".multiple-text", {
    strings: ["BSIT-STUDENT", "HARDWORKING", "MOTIVATED"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var typed = new Typed(".multi-text", {
    strings: ["About Me","About Me" ,"About Geo"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

//====================NAv BAR==========================//

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

//=========== DL CV ===============//
  const openBtn = document.getElementById("openResume");
  const closeBtn = document.getElementById("closeResume");
  const modal = document.getElementById("resumeModal");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

