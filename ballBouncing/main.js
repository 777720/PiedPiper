
var canvas = document.querySelector('canvas');
canvas.style.borderColor = 'black'
canvas.style.borderWidth = '5px'
canvas.style.borderStyle = 'solid'

var ctx = canvas.getContext('2d')

var width = canvas.width = window.innerWidth - 10;
var height = canvas.height = window.innerHeight -10;

var balls = []

// 小球的构造函数
function Ball(x, y, speedX, speedY, color, radius, density) {
  this.x = x;
  this.y = y;
  this.speedX = speedX;
  this.speedY = speedY;
  this.color = color;
  this.radius = radius;
  this.density = density;
}

// 绘制
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
  ctx.fill()
}


// 边界碰撞检测
Ball.prototype.borderCollisionDetect = function () {
  if ((this.x + this.radius) >= width && this.speedX > 0) {
    this.speedX *= -1
  }
  if ((this.x - this.radius) <= 0 && this.speedX < 0) {
    this.speedX *= -1
  }
  if ((this.y + this.radius) >= height && this.speedY > 0) {
    this.speedY *= -1
  }
  if ((this.y - this.radius) <= 0 && this.speedY < 0) {
    this.speedY *= -1
  }
}

// 两个小球的碰撞检测
function ballsCollisionDetect(ball1, ball2) {
  // 当前距离
  var dx = ball1.x - ball2.x
  var dy = ball1.y - ball2.y
  var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))

  // 预测下一时刻会不会碰撞
  let dx_next = ball1.x + ball1.speedX - ball2.x + ball2.speedX;
  let dy_next = ball1.y + ball1.speedY - ball2.y + ball2.speedY;
  let distance_next = Math.sqrt(Math.pow(dx_next, 2) + Math.pow(dy_next, 2))

  if (distance_next < ball1.radius + ball2.radius && distance_next < distance) {
    return true
  }
  return false
}
// 更新碰撞后的状态
function collide(ball1, ball2) {
  require(['Vector2d'], function(Vector2d) {
    // 初始速度向量
    let speed_ball1_initial = new Vector2d(ball1.speedX, ball1.speedY)
    let speed_ball2_initial = new Vector2d(ball2.speedX, ball2.speedY)
    // 球心单位方向向量
    let s = new Vector2d(ball2.x - ball1.x, ball2.y - ball1.y)
    s = s.normalize();
    // 垂直球心方向单位向量
    let t = s.rotate(Math.PI / 2)

    // 速度在球心向量的分速度投影
    let speed_ball1_initial_sc = speed_ball1_initial.dotProduct(t) / t.length()
    let speed_ball2_initial_sc = speed_ball2_initial.dotProduct(t) / t.length()

    // 速度在垂直球心向量上的分速度投影
    let speed_ball1_initial_tc = speed_ball1_initial.dotProduct(t) / t.length()
    let speed_ball2_initial_tc = speed_ball2_initial.dotProduct(t) / t.length()

    // 碰撞后球心方向上的分速度

    let speed_ball1_final_sc = (
      speed_ball1_initial_sc * (
        ball1.density * Math.pow(ball1.radius, 3) - ball2.density * Math.pow(ball2.radius, 3)
      ) + 2 * (ball2.density * Math.pow(ball2.radius, 3)) * speed_ball2_initial_sc
    ) / (ball1.density * Math.pow(ball1.radius, 3) + ball2.density * Math.pow(ball2.radius, 3));

    let speed_ball2_final_sc = (
      speed_ball2_initial_sc * (
        ball2.density * Math.pow(ball2.radius, 3) - ball1.density * Math.pow(ball1.radius, 3)
      ) + 2 * (ball1.density * Math.pow(ball1.radius, 3)) * speed_ball1_initial_sc)
      / (ball1.density * Math.pow(ball1.radius, 3) + ball2.density * Math.pow(ball2.radius, 3));



    // 碰撞后球心方向上的分速度向量
    let speed_ball1_final_s = s.scale(speed_ball1_final_sc);
    let speed_ball2_final_s = s.scale(speed_ball2_final_sc);

    // 碰撞后垂直球心方向上的分速度向量
    let speed_ball1_final_t = t.scale(speed_ball1_initial_tc);
    let speed_ball2_final_t = t.scale(speed_ball2_initial_tc);

    // 结束速度向量
    let speed_ball1_final = speed_ball1_final_s.add(speed_ball1_final_t);
    let speed_ball2_final = speed_ball2_final_s.add(speed_ball2_final_t);

    // 更新速度
    ball1.speedX = speed_ball1_final.x;
    ball1.speedY = speed_ball1_final.y;

    ball2.speedX = speed_ball2_final.x;
    ball2.speedY = speed_ball2_final.y;
  })
}
function update() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].borderCollisionDetect();

    for (let j = i + 1; j < balls.length; j++) {
      if (ballsCollisionDetect(balls[i], balls[j])) {
        collide(balls[i], balls[j]);
      }
    }

    // 更新位置
    balls[i].x += balls[i].speedX;
    balls[i].y += balls[i].speedY;
  }
}


// 创建小球对象
function createBalls() {
  require(['utils'], function(utils) {
    while(balls.length < 8) {
      var ball = new Ball(
        utils.random(0, width),
        utils.random(0, height),
        utils.random(1, 8),
        utils.random(1, 8),
        'rgb(' + utils.random(0, 255) + ',' + utils.random(0, 255) + ',' + utils.random(0, 255) + ')',
        30,
        1
      );
      balls.push(ball);
    }
  });
}
function update() {
  for(let i = 0; i < balls.length; i ++) {
    balls[i].borderCollisionDetect();
    for(let j = i + 1; j < balls.length; j ++) {
      if (ballsCollisionDetect(balls[i], balls[j])) {
        collide(balls[i], balls[j]);
      }
    }
    // 更新位置
    balls[i].x += balls[i].speedX
    balls[i].y += balls[i].speedY
  }
  
}
function loop(timestamp) {
  // console.log('timestamp: '+ timestamp);

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
  }

  update();

  let result = requestAnimationFrame(loop);
  // console.log('result'+ result);

  // setTimeout(loop, 100);
}

function start() {
  createBalls();
  loop();
}

start();