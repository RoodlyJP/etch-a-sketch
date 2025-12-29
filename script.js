let container = document.querySelector("#container");
let gridSize = 16;

for(let i = 0; i<gridSize; i++){
    for(let i = 0; i<gridSize; i++){
        let div = document.createElement("div");
        div.style.cssText = `width: calc(100% / ${gridSize}); height: calc(100% / ${gridSize})`;
        div.classList.add("incolor");
        div.addEventListener("mouseover", () => {
            if(div.getAttribute("class") == "incolor") {
                div.classList.remove("incolor");
                div.classList.add("colorful");
            } else {
                div.classList.remove("colorful");
                div.classList.add("incolor");
            }

        });
        container.appendChild(div);
    }
}