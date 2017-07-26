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

  collide() {
    if (this.y + this.height < 0) {
      return true
    }
    return false
  }

  draw() {
    this.img.draw(this.x, this.y)
  }

  update() {
    if (this.collide()) {
      this.flight.removeBall(this)
      return
    }
    this.move()
  }
}
