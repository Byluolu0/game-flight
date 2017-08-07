class Bullet extends SliceImage {
  constructor(scene, sliceInfo, flight) {
    super(scene, sliceInfo)
    this.flight = flight
    this.speed = config.bullet_speed
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
    this.scene.removeBullet(this)
  }

  update() {
    if (this.outOfScene()) {
      this.die()
      return
    }
    this.move()
  }
}
