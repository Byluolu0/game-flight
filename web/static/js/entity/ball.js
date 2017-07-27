class Ball extends GameImage {
  constructor(scene, flight, rawImage) {
    super(scene, rawImage)
    this.flight = flight
    this.speed = config.ball_speed
  }

  setSpeed(speed) {
    this.speed = speed
  }

  move() {
    this.y -= this.speed
  }

  outOfScene() {
    return this.y + this.height < 0
  }

  die() {
    this.scene.removeBall(this)
  }

  update() {
    if (this.outOfScene()) {
      this.die()
      return
    }
    this.move()
  }
}
