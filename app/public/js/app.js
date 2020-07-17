import UiManager from "./ui/uiManager.js";
import options from "./options.js";
import Map from "./gameObjects/map/map.js";
import Cell from "./gameObjects/map/cell.js";

const canvas = document.getElementById("app");
const ctx2d = canvas.getContext("2d");
const map = new Map(options);
window.debug = {};

function main() {
    // let uiManager = new UiManager();
    
    window.debug.options = options;
    window.debug.map = map;
    resizeCanvas();
    registerEventHandler();
    requestAnimationFrame(draw);
}

function registerEventHandler() {
    window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function draw() {
    ctx2d.fillStyle = options.canvas.backgroundColor;
    ctx2d.fillRect(0, 0, canvas.width, canvas.height);

    map.draw(ctx2d);
    
    requestAnimationFrame(draw);
}

main();