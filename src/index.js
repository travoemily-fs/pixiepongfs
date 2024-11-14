console.log("js is loaded properly!");

// new pixi.js instance
const app = new PIXI.Application({
    width:800,
    height:500,
    backgroundColor:0x3398b9
});
// add to DOM
document.getElementById("mcontainer").appendChild(app.view);

// create graphic instance for circle 1
const circle = new PIXI.Graphics();
circle.beginFill(0xf5ef42);
// draw your circle using x, y, and radius size
circle.drawCircle(400, 250, 5);
circle.endFill();
app.stage.addChild(circle);
