/*=============== Show menu =============== */
const navmenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navmenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu');
    });
}

// const navLink = document.querySelectorAll('.nav__link');

/*=============== Active Link =============== */
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));
function activeLink() {
    navLink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navLink.forEach((a) => a.addEventListener('click', activeLink));

/*=============== Background Header =============== */
function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*=============== Mixitup Filter =============== */

/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper(".testimonial__container", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

/*=============== Contact Form =============== */

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();
        if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');

            contactMessage.textContent = 'Write All the Input fields.';
        } else {
            // service_id, template_id, #form-name, publickey
            emailjs.sendForm('service_7im7iiw', 'template_2nqvda9', '#contact-form', 'BVE07ffitcNGhaz0f')
            .then(() => {
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message Sent ✔';

                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 4000);

            }, (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            })

            contactName.value = '';
            contactEmail.value = '';
            message.value = '';
        }
    };
    contactForm.addEventListener('submit', sendEmail);
    

