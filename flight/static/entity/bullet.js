class Bullet extends SliceImage {
  constructor(scene, flight, cfg, rawImage) {
    super(scene, cfg, rawImage)
    this.flight = flight
    this.speed = cfg.speed
    this.scene.addBullet(this)
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
