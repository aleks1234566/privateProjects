const containerEl = document.querySelector(".main");

for(let index = 0; index < 30; index ++ ){
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    containerEl.appendChild(colorContainer)
}
function randomColor(){
    const chars = "0123456789abcdef";
    const colorlength = 6;
    let color = "";
    for(let index = 0; index < colorlength; index ++){
        const random = Math.floor(Math.random() * chars.length);
        color += chars.substring(random, random + 1);
       
        
    }
    return color;
    
}
const containerEls = document.querySelectorAll(".color-container")
generateColors()
function generateColors(){
    containerEls.forEach((containerEl)=>{
        const newColor = randomColor();
        containerEl.style.backgroundColor = "#" + newColor;
        containerEl.innerHTML = "#" + newColor;
        
        
    });
    
};