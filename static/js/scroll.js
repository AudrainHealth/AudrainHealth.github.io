let last = 0;
let tick = false;
let issue = document.querySelector('#issue');
let news = document.querySelector('#news');
let nav = document.querySelector('#second-nav');

function updateNavbar(position) {
    let average = (issue.offsetTop * 2 + news.offsetTop) / 3;
    if (position > average) {
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