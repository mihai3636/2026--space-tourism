const dotsList = document.getElementById("dotsList");
const titleEl = document.getElementById("techTitle");
const descriptionEl = document.getElementById("techDescription");

export function initDotsListener(onDotButtonClicked) {
  if (dotsList == null) return;

  dotsList.addEventListener("click", (ev) => {
    const target = ev.target;
    const listItemEl = ev.target.closest(".dot__item");

    if (listItemEl == null) return;

    const techIndex = Number(listItemEl.dataset.index);

    onDotButtonClicked && onDotButtonClicked(techIndex);
  });
}

export function render({ name, description }) {
  titleEl.textContent = name;
  descriptionEl.textContent = description;
}
