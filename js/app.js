import {UiManager} from "./ui/uiManager.js";

canvas = document.getElementById("app");
ctx = canvas.getContext("2d");

function main() {
    let uiManager = new UiManager();

    resizeCanvas();
    requestAnimationFrame(draw);
}

function registerEventHandler() {
    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas(){
    canvas.height = window.innerHeight - 25;
    canvas.width = window.innerWidth - 25;
}

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var tileSize = 32;
    var rows = Math.ceil(canvas.height / tileSize); 
    var cols = Math.ceil(canvas.width / tileSize);

    ctx.fillStyle = "lightBlue";
    for (var y = 0; y < rows; y++ )
    {
        for (var x = 0; x < cols; x++ )
        {
            let posX = 1+x*tileSize;
            let posY = 1+y*tileSize;

            ctx.moveTo(posX, posY);
            ctx.fillRect(posX, posY, tileSize - 2, tileSize - 2);
        } 
    }
    
    requestAnimationFrame(draw);
}

main();