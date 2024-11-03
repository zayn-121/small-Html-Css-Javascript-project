const textAreaEl = document.querySelector(".textarea");
const totalCountEl = document.querySelector(".total-count");
const remainingCountEl = document.querySelector(".remaining-count");

textAreaEl.addEventListener("keyup", () => {
  updateCount();
});

updateCount();

function updateCount() {
  totalCountEl.textContent = textAreaEl.value.length;

  remainingCountEl.innerText =
    textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}
