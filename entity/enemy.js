class Enemy {
  constructor(scene, image, x, y, speed) {
    this.scene = scene
    this.img = image
    this.x = x
    this.y = y
    this.width = image.width
    this.height = image.height
    this.speed = speed / scene.fps
  }

  move() {
    this.y += this.speed
  }

  draw() {
    this.img.draw(this.x, this.y)
  }

  die() {
    this.scene.removeEnemy(this)
  }

  outOfScene() {
    return this.y > this.scene.height
  }

  update() {
    if (this.outOfScene()) {
      this.die()
      return
    }
    this.move()
  }
}
