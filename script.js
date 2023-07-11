let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 800,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .projects, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Engineer', 'Builder', 'Entrepreneur', 'Tinkerer', 'Explorer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});


function copyToClipboard(text,) {
    navigator.clipboard.writeText(text)
        .then(function() {
            console.log("Text copied to clipboard");
        })
        .catch(function(error) {
            console.error("Failed to copy text: ", error);
        });
        
        // alert("Link Copied!");
}

// function changeIcon(anchor){
//     var icon = anchor.querySelector("i");
//     icon.classList.toggle('bx-check');
//     icon.classList.toggle('bx-link');
// }

function changeIcon(anchor){
    var icon = anchor.querySelector("i");
    if(icon.className=="bx bx-link"){
      icon.className = "bx bx-check";
    }
    else if(icon.className=="bx bx-check"){
      icon.className = "bx bx-check";
    }
}


// function refresh(){
//     window.location.href = "..index.html";
// }

var currentURL = window.location.href;

// Set the homepage URL
var homepageURL = "https://sankethchavhan.github.io/"; // Replace with your actual homepage URL

// Check if the current URL is the homepage
if (currentURL !== homepageURL) {
  // Redirect to the homepage
  window.location.href = homepageURL;
}
