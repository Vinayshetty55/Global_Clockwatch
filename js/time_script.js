document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const navUl = document.querySelector("nav ul");

    toggleButton.addEventListener("click", function () {
        navUl.classList.toggle("show");
    });
});

var swiper = new Swiper('.slide-content', {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: 'true',
    speed: 1000,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

let ind;
let ind_option = { timeZone: 'Asia/Kolkata', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_ind;
setInterval(() => {
    ind = new Date();
    formatter_ind = new Intl.DateTimeFormat('en-GB', ind_option).format(ind);
    document.getElementById('time_ind').innerHTML = formatter_ind + "<br>";
}, 1000);

let nyk;
let nyk_option = { timeZone: 'America/New_York', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_nyk;
setInterval(() => {
    nyk = new Date();
    formatter_nyk = new Intl.DateTimeFormat('en-GB', nyk_option).format(nyk);
    document.getElementById('time_nyk').innerHTML = formatter_nyk + "<br>";
}, 1000);

let dub;
let dub_option = { timeZone: 'Asia/Dubai', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_dub;
setInterval(() => {
    dub = new Date();
    formatter_dub = new Intl.DateTimeFormat('en-GB', dub_option).format(dub);
    document.getElementById('time_dub').innerHTML = formatter_dub + "<br>";
}, 1000);

let lon;
let lon_option = { timeZone: 'Europe/London', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_lon;
setInterval(() => {
    lon = new Date();
    formatter_lon = new Intl.DateTimeFormat('en-GB', lon_option).format(lon);
    document.getElementById('time_lon').innerHTML = formatter_lon + "<br>";
}, 1000);

let tok;
let tok_option = { timeZone: 'Asia/Tokyo', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_tok;
setInterval(() => {
    tok = new Date();
    formatter_tok = new Intl.DateTimeFormat('en-GB', tok_option).format(tok);
    document.getElementById('time_tok').innerHTML = formatter_tok + "<br>";
}, 1000);

let aus;
let aus_option = { timeZone: 'Australia/Sydney', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_aus;
setInterval(() => {
    aus = new Date();
    formatter_aus = new Intl.DateTimeFormat('en-GB', aus_option).format(aus);
    document.getElementById('time_aus').innerHTML = formatter_aus + "<br>";
}, 1000);
1
let joh;
let joh_option = { timeZone: 'Africa/Johannesburg', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_joh;
setInterval(() => {
    joh = new Date();
    formatter_joh = new Intl.DateTimeFormat('en-GB', joh_option).format(joh);
    document.getElementById('time_joh').innerHTML = formatter_joh + "<br>";
}, 1000);

let swi;
let swi_option = { timeZone: 'Europe/Zurich', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_swi;
setInterval(() => {
    swi = new Date();
    formatter_swi = new Intl.DateTimeFormat('en-GB', swi_option).format(swi);
    document.getElementById('time_swi').innerHTML = formatter_swi + "<br>";
}, 1000);

let isr;
let isr_option = { timeZone: 'Asia/Jerusalem', hour12: false, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
let formatter_isr;
setInterval(() => {
    isr = new Date();
    formatter_isr = new Intl.DateTimeFormat('en-GB', isr_option).format(isr);
    document.getElementById('time_isr').innerHTML = formatter_isr + "<br>";
}, 1000);
