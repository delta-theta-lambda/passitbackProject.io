const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

hamburger.addEventListener('click', () => { // on click bool check
    if (menuOpen == false) {
        navLinks.style.display = "block";
        menuOpen = true; 
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});

// G. Foster: Credit to Navbar Youtube Tutorial by Dani Krossing ^^ 
