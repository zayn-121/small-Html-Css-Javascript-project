const bodyEl = document.querySelector("body");

bodyEl. addEventListener ("mousemove", function (e){ 
    console.log("moved");

    const x = e.offsetX;
    const y = e.offsetY;

    const spanEl = document.createElement("span");

    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";

    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000)
})

