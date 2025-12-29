let gridSize = 16;
let userGridSize = 0;


function createGrid() {
    for(let i = 0; i<gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.style.cssText = `width: calc(100% / ${gridSize}); height: calc(100% / ${gridSize})`;
        div.classList.add("nocolor");
        div.addEventListener("mouseover", () => {
            if(div.getAttribute("class") == "nocolor") {
                div.classList.remove("nocolor");
                div.classList.add("colorful");
            } else {
                div.classList.remove("colorful");
                div.classList.add("nocolor");
            }
        
        });
        container.appendChild(div);
    }
}

const container = document.querySelector("#container");
const gridSizebtn = document.querySelector("#buttons");

const button = document.createElement("button");
button.textContent = "Grid Size";
button.style.cssText = "padding: 1rem 2rem; background-color: green; color: white; border: none; border-radius: 1rem;";

button.addEventListener("click", ()=> {
    do{
        userGridSize = parseInt(prompt("Enter a grid size(4-100): ", 16));
    } while(userGridSize < 4 || userGridSize > 100);
    gridSize = userGridSize;
    
    container.replaceChildren();
    createGrid();
});

gridSizebtn.appendChild(button);

createGrid();

