var homeButton = document.getElementById("home-link");
var workButton = document.getElementById("work-link");
var aboutButton = document.getElementById("about-link");

function highlightHomeButton () {
    homeButton.className = "nav-selected";
    workButton.className = "";
    aboutButton.className = "";
}

function highlightWorkButton () {
    homeButton.className = "";
    workButton.className = "nav-selected";
    aboutButton.className = "";
}

function highlightAboutButton () {
    homeButton.className = "";
    workButton.className = "";
    aboutButton.className = "nav-selected";
}

homeButton.onclick = () => {
    highlightHomeButton();
    unobserveAll();
    setTimeout(observeAll, 500);
}

workButton.onclick = () => {
    highlightWorkButton();
    unobserveAll();
    setTimeout(observeAll, 500);
}

aboutButton.onclick = () => {
    highlightAboutButton();
    unobserveAll();
    setTimeout(observeAll, 500);
}

// check url
// if #about appears in URL
// then highlight about nav link
let url = window.location.href;
if(url.includes('#about')) {
    highlightAboutButton();
}
// if #work appears in URL
// then highlight about work link
if(url.includes('#work')) {
    highlightWorkButton();
}


// IN INDEX PAGE
// CHANGE TAB SELECTED CLASS
// BASED ON VIEWPORT

const homeContainer = document.querySelector('#home');
const workContainer = document.querySelector('#work');
const aboutContainer = document.querySelector('#about');

const homeObserver = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    // todo when in viewport
    highlightHomeButton();
  }
  // todo when NOT in viewport
}, {
  root: null,
  threshold: 0.8, // set offset 0.1 means trigger if atleast 10% of element in viewport
});

const workObserver = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      // todo when in viewport
      highlightWorkButton();
    }
    // todo when NOT in viewport
  }, {
    root: null,
    threshold: 0.3, // set offset 0.1 means trigger if atleast 10% of element in viewport
});

const aboutObserver = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      // todo when in viewport
      highlightAboutButton();
    }
    // todo when NOT in viewport
  }, {
    root: null,
    threshold: 0.7, // set offset 0.1 means trigger if atleast 10% of element in viewport
});

function observeAll () {
    // observing three elements
    homeObserver.observe(homeContainer);
    workObserver.observe(workContainer);
    aboutObserver.observe(aboutContainer);
}

function unobserveAll () {
    homeObserver.unobserve(homeContainer);
    workObserver.unobserve(workContainer);
    aboutObserver.unobserve(aboutContainer);
}

observeAll();