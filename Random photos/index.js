const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    addNewImages();
})
let imageNum = 10;

function addNewImages(){
    for(let i = 0; i < imageNum; i++){
        const image = document.createElement("img");
    image.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainer.appendChild(image);
    }
    
}