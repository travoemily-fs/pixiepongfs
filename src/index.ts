(() => {
  console.log("js is loaded properly!");

  // new pixi.js instance
  const app = new PIXI.Application({
    width: 800,
    height: 500,
    backgroundColor: 0x9D87F0,
  });

  // add to DOM
  document.getElementById("mcontainer")!.appendChild(app.view);

  // create graphic instance for circle 1
  const circle = new PIXI.Graphics();
  circle.beginFill(0x7F51E5);
  // draw your circle using x, y, and radius size
  circle.drawCircle(5, 5, 5);
  circle.endFill();
  circle.x = 450;
  circle.y = 250;
  let xv = 1;
  let yv = 1;
  app.stage.addChild(circle);

  // init canvas container
  const canvas = document.querySelector("#mcontainer canvas") as HTMLElement;

  // pre-determined colors for each border upon collision
  const borderColors = {
    top: "black",
    bottom: "black",
    left: "black",
    right: "black",
  };

  // tracking border collisions for loop
  const borderHits = {
    top: false,
    bottom: false,
    left: false,
    right: false,
  };

  // check if borders have been collided with
  const allBordersHit = (): boolean =>
    borderHits.top && borderHits.bottom && borderHits.left && borderHits.right;

  // promise to handle game ending
  const gameOverPromise = new Promise<void>((resolve) => {
    // store ticker inside promise
    app.ticker.add(() => {
      // detect horizontal border collisions
      if (circle.x >= 800 && !borderHits.right) {
        xv = -xv;
        canvas.style.borderRightColor = borderColors.right;
        borderHits.right = true;
      } else if (circle.x <= 0 && !borderHits.left) {
        xv = -xv;
        canvas.style.borderLeftColor = borderColors.left;
        borderHits.left = true;
      }

      // detect vertical border collisions
      if (circle.y >= 500 && !borderHits.bottom) {
        yv = -yv;
        canvas.style.borderBottomColor = borderColors.bottom;
        borderHits.bottom = true;
      } else if (circle.y <= 0 && !borderHits.top) {
        yv = -yv;
        canvas.style.borderTopColor = borderColors.top;
        borderHits.top = true;
      }

      // check to see if all border hit values are true
      if (allBordersHit()) {
        resolve(); // resolve promise when all borders have been collided with
      }

      // update circle position
      circle.x += xv;
      circle.y += yv;
    });
  });
  // game over logic after promise is resolved
  gameOverPromise.then(() => {
    app.ticker.stop(); // stops the game

    // shows play again button
    const playAgainBtn = document.getElementById("playAgain") as HTMLElement;
    playAgainBtn.style.display = "block";

    // restarts game when btn is clicked
    playAgainBtn.addEventListener("click", () => {
      location.reload();
    });
  });
})();
