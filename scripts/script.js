const navItems = document.querySelector(".nav-items");
// dit laat ik staan puur omdat het altijd de eerste nav zal pakken
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const publications = document.querySelector(".pub-list");
const mailInputs = document.querySelectorAll("input[type='email']");

// In het geval van meerdere inputs
mailInputs.forEach((input) => {
  input.addEventListener("invalid", () => {
    input.setCustomValidity("Incorrect mail adres");
  });
});

let isScrolled = false;

const OpenBurger = (e) => {
  console.log(e.target, "hoi");

  e.preventDefault();
  overlay.classList.toggle("open");
  navItems.classList.toggle("open");
  burger.classList.toggle("open");
};
burger.addEventListener("click", OpenBurger);

const handler = (entries) => {
  // entries is an array of observed dom nodes
  // we're only interested in the first (and only) one at [0]
  // because that's my nav node.
  // Here observe whether or not that node is in the viewport
  if (!entries[0].isIntersecting) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};
const options = {
  root: document.body, // The root of the observer
  rootMargin: "0px 0px -99% 0px", // little hack to push the rootMargin up to the top of the page
  threshold: 0, // how much % of the document.body should be visible for the handler function to fire?
};

// create the observer and decide the function name + the options for it
const observer = new window.IntersectionObserver(handler, options);
// give the observer some dom node(s) to keep an eye on
observer.observe(nav);

// pub listing
const revealBtn = document.querySelector("button.btn");
let initialBool = true;
let pubItems = document.querySelectorAll(".pub-list>li:not(.displayed)");
// check if the element exists and then add the event listener (avoids errors and unnecessary code)
revealBtn &&
  revealBtn.addEventListener("click", () => {
    // added this just for fun :)
    if (initialBool) {
      revealBtn.children[0].textContent = "Haal ze weg";
    } else revealBtn.children[0].textContent = "Laad meer publicaties in";
    initialBool = !initialBool;
    for (let i = 0; i < pubItems.length; i++) {
      setTimeout(() => {
        pubItems[i].classList.toggle("displayed");
      }, 300 * i);
    }
  });

const details = document.querySelectorAll("details");
// bool to handle touch
let touchEvent = false;

// handle on touchstart
document.addEventListener("touchstart", (e) => {
  touchEvent = true;
  handleEvent(e);
});

// handle on click
document.addEventListener("click", (e) => {
  // Avoiding handling both at the same time, just in case
  if (!touchEvent) {
    handleEvent(e);
  }
  // Reset the flag after the click event
  touchEvent = false;
});

function handleEvent(e) {
  // Close the details if the target isn't a detail element
  if (!e.target.closest("details")) {
    details.forEach((detail) => {
      detail.open = false; // Close all details
    });
  } else {
    // Toggle the clicked detail element (tried this another way but it didn't work!)
    const clickedDetail = e.target;
    clickedDetail.open = !clickedDetail.open;
  }
  // Check if the target is neither the burger nor inside navItems
  if (e.target !== burger && !navItems.contains(e.target)) {
    overlay.classList.remove("open");
    navItems.classList.remove("open");
    burger.classList.remove("open");
  }
  console.log(touchEvent);
}
