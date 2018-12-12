let last = 0;
let tick = false;
let issue = document.querySelector('#issue');
let nav = document.querySelector('#second-nav');

let pdfCloseButton = document.querySelector('#close-pdf');
let pdfContainer = document.querySelector('.pdf-viewer');
let pdfViewer = document.querySelector('iframe#pdf-embed');
let pdfAnchors = {
    'link-news-and-information': '/static/News%20and%20Information%20PDF%20with%20links.pdf',
    'link-audrain-faq': '/static/Audrain%20FAQ%20formatted.pdf',
    'link-whats-at-stake': '/static/What\'s%20at%20Stake%20Long%20Format.pdf',
    'link-issues': '/static/Long%20format%20Issues.pdf',
    'link-proposal': '/static/Long%20format%20Proposal.pdf'
}

/** Scrolling **/
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
/** End Scrolling **/

function closePDF() {
    if (!pdfContainer.classList.contains('hidden')) {
        pdfContainer.classList.add('hidden');
    }
}

pdfCloseButton.addEventListener('click', closePDF);

/** PDF Embeds **/
function loadPDF(url) {
    return function doLoadPDF() {
        if (pdfContainer.classList.contains('hidden')) {
            pdfContainer.classList.remove('hidden');
        }
        pdfViewer.contentDocument.location = url;
        pdfViewer.scrollIntoView({behavior:'smooth'});
    }
}

Object.keys(pdfAnchors).forEach(function(id) {
    console.log(id);
    let url = pdfAnchors[id];
    let query = '#' + id;
    
    let anchor = document.querySelector(query);
    
    if (!anchor) {
        console.log('Error! Could not locate anchor: ' + query);
        return;
    }

    anchor.addEventListener('click', loadPDF(url));
});
/** End PDF Embeds **/