"use strict";

const btnMenuEl = document.getElementById("btnMenu");
const navEl = document.getElementById("nav");
const navListEl = document.getElementById("navList");

console.log(btnMenuEl);

setupTabTrapping();

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

function closeMenu() {
  navEl.dataset.open = false;
  btnMenuEl.ariaExpanded = false;
  navListEl.ariaHidden = true;
  navListEl.setAttribute("inert", "");
  document.body.classList.remove("overflow-hidden");
  btnMenuEl.focus();
}

function openMenu() {
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
    if (e.key != "Tab" || navEl.dataset.open === "false") return;

    if (e.shiftKey && document.activeElement === firstLink) {
      e.preventDefault();
      firstEl.focus();
      return;
    }

    if (document.activeElement === firstEl) {
      e.preventDefault();
      firstLink.focus();
    }

    if (document.activeElement === lastEl) {
      e.preventDefault();
      firstEl.focus();
    }
  });
}
