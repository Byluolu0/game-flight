class Ball {
  constructor(scene, flight, image, x, y, speed) {
    this.scene = scene
    this.flight = flight
    this.img = image
    this.x = x
    this.y = y
    this.width = image.width
    this.height = image.height
    this.speed = speed / scene.fps
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

  draw() {
    this.img.draw(this.x, this.y)
  }

  update() {
    if (this.outOfScene()) {
      this.die()
      return
    }
    this.move()
  }
}
