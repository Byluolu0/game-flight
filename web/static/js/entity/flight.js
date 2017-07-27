class Flight extends GameImage {
  constructor(scene, rawImage) {
    super(scene, rawImage)
    this.scene = scene
    this.speed = config.flight_speed
    this.fireEnergyNeed = config.fire_enegy_need
    this.energy = 0
  }

  setSpeed(speed) {
    this.speed = speed
  }

  setFireEnergyNeed(fireEnergyNeed) {
    this.fireEnergyNeed = fireEnergyNeed
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
    var ball_x = this.x + this.width / 2
    var ball_y = this.y
    var ball = new Ball(this.scene, this, image)
    ball.setPosition(ball_x, ball_y)
    this.scene.addBall(ball)
    this.energy = 0
  }

  collide(enemy) {
    return collide(enemy, this)
  }

  update() {
    if (this.energy < this.fireEnergyNeed) {
      this.energy += 1
    }
  }
}
