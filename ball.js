class Ball {
  constructor(scene, image, x, y, speed) {
    this.scene = scene
    this.img = image
    this.x = x
    this.y = y
    this.speed = speed / scene.fps
    log(this.x, this.y, this.speed)
  }

  move() {
    this.y -= this.speed
  }

  draw() {
    this.img.draw(this.x, this.y)
  }

  update() {
    this.move()
  }
}
