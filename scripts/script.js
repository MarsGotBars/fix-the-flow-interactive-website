const pageWithoutScroll = window.innerWidth - 15;
const navItems = document.querySelector(".nav-items");
const nav = document.querySelector("nav");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
let isScrolled = false;

// switch to intersectionObserver
const checkScroll = () => {
  const scrolledDown = window.scrollY > 0;

  if (scrolledDown && !isScrolled) {
    nav.classList.add("scrolled");
    isScrolled = true;
  } else if (!scrolledDown && isScrolled) {
    nav.classList.remove("scrolled");
    isScrolled = false;
  }
};

pageWithoutScroll > 660 && window.addEventListener("scroll", checkScroll) && burgerMenu.addEventListener("click", OpenBurger);

const OpenBurger = (e) => {
  console.log(navItems);
  e.preventDefault();
  overlay.classList.toggle("open");
  navItems.classList.toggle("open");
};
burger.addEventListener("click", OpenBurger);

