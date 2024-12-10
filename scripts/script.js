const pageWithoutScroll = window.innerWidth - 15;
const navItems = document.querySelector(".nav-items");
const nav = document.querySelector("nav");
const header = document.querySelector("header")
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const hiddenArticles = document.querySelectorAll(".pub-listing:not(:first-of-type)")
let isScrolled = false;

const OpenBurger = (e) => {
  e.preventDefault();
  overlay.classList.toggle("open");
  navItems.classList.toggle("open");
};
burger.addEventListener("click", OpenBurger);

const handler = (entries) => {
  // entries is an array of observed dom nodes
  // we're only interested in the first (and only) one at [0]
  // because that's my nav node.
  // Here observe whether or not that node is in the viewport
  if (!entries[0].isIntersecting) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}
const options = {
  root: document.body, // The root of the observer
  rootMargin: '0px 0px -99% 0px', // little hack to push the rootMargin up to the top of the page
  threshold: 0 // how much % of the document.body should be visible for the handler function to fire?
};

// create the observer and decide the function name + the options for it
const observer = new window.IntersectionObserver(handler, options)
// give the observer some dom node(s) to keep an eye on
observer.observe(nav)

// pointer event mouse tracking

// buiten het menu klikken moet dit sluiten

// view transitioning
const exampleButton = document.querySelector('button.btn');
console.log(exampleButton);
exampleButton && exampleButton.addEventListener('click', () => {
  document.startViewTransition && document.startViewTransition((e) => loadArticles(e));
})

function loadArticles(e){
  console.log('loadArticles fired', e);
  // zorgt ervoor dat de event in de log hierboven undefined is
  e.preventDefault
  hiddenArticles.forEach(article => {
    article.classList.add('loaded')
    // Ik zie dat dit stuk wel goed verloopt, de elementen krijgen de classes ik ze toewijs
    console.log(article, article.classList);
    
  });
}
