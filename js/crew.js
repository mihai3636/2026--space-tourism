const dotsList = document.getElementById("dotsList");
const nameEl = document.getElementById("crewTitle");
const bioEl = document.getElementById("crewBio");
const roleEl = document.getElementById("crewRole");

export function initDotsListener(onDotButtonClicked) {
  if (dotsList == null) return;

  dotsList.addEventListener("click", (ev) => {
    const target = ev.target;
    const listItemEl = ev.target.closest(".dot__item");

    if (listItemEl == null) return;

    const crewMemberIndex = Number(listItemEl.dataset.index);

    onDotButtonClicked && onDotButtonClicked(crewMemberIndex);
  });
}

export function render({ name, role, bio }) {
  nameEl.textContent = name;
  roleEl.textContent = role;
  bioEl.textContent = bio;
}
