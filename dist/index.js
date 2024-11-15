"use strict";
(() => {
    console.log("js is loaded properly!");
    // new pixi.js instance
    const app = new PIXI.Application({
        width: 800,
        height: 500,
        backgroundColor: 0x3398b9,
    });
    // add to DOM
    document.getElementById("mcontainer").appendChild(app.view);
    // create graphic instance for circle 1
    const circle = new PIXI.Graphics();
    circle.beginFill(0xf5ef42);
    // draw your circle using x, y, and radius size
    circle.drawCircle(5, 5, 5);
    circle.endFill();
    circle.x = 450;
    circle.y = 250;
    let xv = 1;
    let yv = 1;
    app.stage.addChild(circle);
    // the ticker
    app.ticker.add(() => {
        if (circle.x >= 800 || circle.x <= 0) {
            xv = -xv;
        }
        if (circle.y >= 500 || circle.y <= 0) {
            yv = -yv;
        }
        circle.x += xv;
        circle.y += yv;
    });
})();
