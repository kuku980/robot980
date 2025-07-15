
let canvas, ctx, robotHero, enemies = [], bgImg, robotImg, enemyImg;

function startGame() {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  canvas.style.display = "block";

  bgImg = new Image();
  bgImg.src = 'assets/bg_winter.png';
  robotImg = new Image();
  robotImg.src = 'assets/robotHero.png';
  enemyImg = new Image();
  enemyImg.src = 'assets/enemy.png';

  bgImg.onload = () => {
    robotImg.onload = () => {
      enemyImg.onload = () => {
        robotHero = { x: 100, y: 300 };
        enemies = [{ x: 700, y: 300 }];
        requestAnimationFrame(gameLoop);
      };
    };
  };
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(robotImg, robotHero.x, robotHero.y, 40, 40);

  enemies.forEach(enemy => {
    ctx.drawImage(enemyImg, enemy.x, enemy.y, 40, 40);
    let dx = robotHero.x - enemy.x;
    let dy = robotHero.y - enemy.y;
    let dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 1) {
      enemy.x += dx / dist;
      enemy.y += dy / dist;
    }
  });

  requestAnimationFrame(gameLoop);
}
