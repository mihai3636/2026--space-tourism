const carouselBtnsListEl = document.querySelector(".carousel__btns");
const carouselItems = [...document.querySelectorAll(".carousel__item")];
const carouselBtns = [...document.querySelectorAll(".carousel__btn")];

export function initCarouselBtns() {
  if (carouselBtnsListEl == null) return;

  carouselBtnsListEl.addEventListener("click", (ev) => {
    const target = ev.target;
    const carouselBtnEl = ev.target.closest(".carousel__btn");

    if (carouselBtnEl == null) return;

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
