"use strict";

const btnMenuEl = document.getElementById("btnMenu");
const navEl = document.getElementById("nav");
const navListEl = document.getElementById("navList");

const mobileNav = window.matchMedia("(max-width: 47.9375rem)");

const carouselBtnsListEl = document.querySelector(".carousel__btns");

const carouselItems = [...document.querySelectorAll(".carousel__item")];
const carouselBtns = [...document.querySelectorAll(".carousel__btn")];

console.log(btnMenuEl);

mobileNav.addEventListener("change", syncNavState);

syncNavState();
setupTabTrapping();
initCarouselBtns();

btnMenuEl.addEventListener("click", () => {
  const currentState = navEl.dataset.open == "true";
  if (currentState) {
    closeMenu();
    return;
  }
  openMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navEl.dataset.open === "true") {
    closeMenu();
  }
});

navListEl.addEventListener("click", (e) => {
  const targetEl = e.target;
  if (targetEl.closest("li") == null) return;

  closeMenu();
});

navListEl.addEventListener("keydown", (e) => {
  if (e.key !== " ") return;
  const targetEl = e.target;
  if (targetEl.closest("li") == null) return;

  closeMenu();
});

function isMobile() {
  return mobileNav.matches;
}

function closeMenu() {
  if (!isMobile()) return;

  navEl.dataset.open = false;
  btnMenuEl.ariaExpanded = false;
  navListEl.ariaHidden = true;
  navListEl.setAttribute("inert", "");
  document.body.classList.remove("overflow-hidden");
  btnMenuEl.focus();
}

function openMenu() {
  if (!isMobile()) return;

  navEl.dataset.open = true;
  btnMenuEl.ariaExpanded = true;
  navListEl.ariaHidden = false;
  navListEl.removeAttribute("inert", "");

  document.body.classList.add("overflow-hidden");

  navListEl.querySelector("a").focus();
}

function setupTabTrapping() {
  const links = [...navListEl.querySelectorAll("a")];
  const firstEl = btnMenuEl;
  const lastEl = links.at(-1);
  const firstLink = links.at(0);

  document.addEventListener("keydown", (e) => {
    if (!isMobile()) return;
    if (e.key != "Tab" || navEl.dataset.open === "false") return;

    if (e.shiftKey && document.activeElement === firstLink) {
      e.preventDefault();
      firstEl.focus();
      return;
    }

    if (document.activeElement === firstEl) {
      e.preventDefault();
      firstLink.focus();
      return;
    }

    if (document.activeElement === lastEl) {
      e.preventDefault();
      firstEl.focus();
    }
  });
}

function syncNavState() {
  if (isMobile()) {
    closeMenu();
  } else {
    navListEl.removeAttribute("inert");
    navListEl.setAttribute("aria-hidden", "false");
    document.body.classList.remove("overflow-hidden");
  }
}

function initCarouselBtns() {
  if (carouselBtnsListEl == null) return;

  carouselBtnsListEl.addEventListener("click", (ev) => {
    console.log(ev.target, ev.currentTarget);

    const target = ev.target;
    const carouselBtnEl = ev.target.closest(".carousel__btn");

    if (carouselBtnEl == null) return;

    console.log("Clicked ", carouselBtnEl.dataset.index);

    const clickedIndex = Number(carouselBtnEl.dataset.index);
    updateCarouselBtns(clickedIndex);
    updateCarouselItems(clickedIndex);
  });
}

function updateCarouselItems(indexClicked) {
  let currentIndex = 0 - indexClicked;

  carouselItems.forEach((item) => {
    item.dataset.index = currentIndex;
    currentIndex += 1;
  });

  console.log(carouselItems);
}

function updateCarouselBtns(indexClicked) {
  for (let i = 0; i < carouselBtns.length; i++) {
    const btn = carouselBtns[i];
    if (Number(btn.dataset.index) === indexClicked) {
      carouselBtns[i].setAttribute("data-selected", "");
      continue;
    }

    btn.removeAttribute("data-selected");
  }
}
