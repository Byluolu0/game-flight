class Flight {
  constructor(scene, image, x, y, speed, fireEnergyNeed) {
    this.scene = scene
    this.img = image
    this.width = image.width
    this.height = image.height
    this.x = x
    this.y = y
    this.speed = speed
    this.fireEnergyNeed = fireEnergyNeed
    this.balls = []
    this.energy = 0
  }

  moveUp() {
    this.y -= this.speed
    if (this.y < 0) {
      this.y = 0
    }
  }

  moveDown() {
    this.y += this.speed
    if (this.y > this.scene.height - this.height) {
      this.y = this.scene.height - this.height
    }
  }

  moveLeft() {
    this.x -= this.speed
    if (this.x < 0) {
      this.x = 0
    }
  }

  moveRight() {
    this.x += this.speed
    if (this.x > this.scene.width - this.width) {
      this.x = this.scene.width - this.width
    }
  }

  fire() {
    if (this.energy < this.fireEnergyNeed) {
      return
    }
    var image = this.scene.getImageByName('ball')
    var ball_image = new GameImage(this.scene, image)
    var ball_x = this.x + this.width / 2
    var ball_y = this.y
    var ball = new Ball(this.scene, this, ball_image, ball_x, ball_y, 200)
    this.balls.push(ball)
    this.energy = 0
  }

  draw() {
    this.img.draw(this.x, this.y)
    for (var i in this.balls) {
      this.balls[i].draw()
    }
  }

  update() {
    if (this.energy < this.fireEnergyNeed) {
      this.energy += 1
    }
    for (var i in this.balls) {
      if (this.balls[i].collide()) {
        this.balls.splice(i, 1)
        continue
      }
      log(this.balls)
      this.balls[i].update()
    }
  }

  removeBall(ball) {
    var index = this.ball.indexOf(ball)
    this.ball.slice(index, 1)
  }
}
