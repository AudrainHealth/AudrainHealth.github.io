let last = 0;
let tick = false;
let issue = document.querySelector('#issue');
let nav = document.querySelector('#second-nav');

function updateNavbar(position) {
    if (position > issue.offsetTop) {
        if (nav.classList.contains('nav-dark')) {
            return;
        } else {
            nav.classList.add('nav-dark');
            return;
        }
    } else {
        if (!nav.classList.contains('nav-dark')) {
            return;
        } else {
            nav.classList.remove('nav-dark');
        }
    }
}

window.addEventListener('scroll', function(event) {
   last = window.scrollY;
   if (!tick) {
       this.window.requestAnimationFrame(function() {
           updateNavbar(last);
           tick = false;
       });
       tick = true;
   } 
});