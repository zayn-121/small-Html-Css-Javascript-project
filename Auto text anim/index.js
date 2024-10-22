const containerEl = document.querySelector(".container");

const career = ["Developer", "Designer", "Freelancer"];
let careerIndex = 0;

let characterIndex = 0;
updatecareer();

function updatecareer() {
    characterIndex++;
  containerEl.innerHTML = `<h1>I am a ${career[careerIndex].slice(0,characterIndex)}</h1>`;
  if (characterIndex===career[careerIndex].length) {
      careerIndex++;
      characterIndex = 0;
  }
  if (careerIndex === career.length) {
    careerIndex = 0;
  }
  setTimeout(updatecareer, 400);
  
}
