const monthName = document.querySelector(".month-name");
const dayName = document.querySelector(".day-name");
const year = document.querySelector(".year");
const today = document.querySelector(".date");

const date = new Date();

monthName.textContent = date.toLocaleString("default", { month: "long" });
dayName.textContent = date.toLocaleString("default", { weekday: "long" });
today.textContent = date.getDate();
year.textContent = date.getFullYear();
